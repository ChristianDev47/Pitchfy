import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentFormSchema } from "../../utils/schemas/paymentSchema";
import toast from "react-hot-toast";
import type { Item, PaymentCard } from "~/types";
import { CreatePaymentCard } from "../../services/payment";
import { useAuth } from "../../hooks/useAuth";
import Check from "../ui/svg/Check";

interface Props {
  item: Item | undefined
}

export default function PaymentForm({item}: Props) {
  const {user} = useAuth()

  const { register, handleSubmit, formState: { errors } } = useForm<PaymentCard>({
    resolver: zodResolver(paymentFormSchema),
  });
  
  const onSubmit = async (data: PaymentCard) => {
    try {
      const myData = data
      const info = await CreatePaymentCard({ paymentCard: {...myData, planId: item ? item.id : '', userId: user._id} })
      if (info === undefined ) {
        toast.error(`Your payment failed `, {
          duration: 5000,
        });
      } else {
        window.location.href = info.url
      }
    } catch (error) {
      console.error(`Error in payment`, error);
      toast.error(`Error adding data`, {
        duration: 5000,
      });
    }
  };

  return (
<div className="flex items-center justify-center w-full h-screen px-16 m-auto">
  <div className="flex flex-wrap items-center justify-between shadow-[10px_10px_30px_4px_rgba(0,0,0,0.1),_-10px_-10px_30px_4px_rgba(135,43,151,0.15)] bg-gray-50 rounded-xl max-w-[714px] w-full">
    <div className="order-2 w-full p-4 md:w-1/2 md:order-1">
      <form className="w-full px-8 pb-5 space-y-2 md:px-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap">
          <div className="w-full py-4">
            <h3 className="text-[18px] font-semibold mb-4">Billing Address</h3>
            <div className="flex items-center justify-start space-x-1">
              <label className="block mb-1 text-[13px]"><i className="fa fa-user"></i> Full Name</label>
              {errors.firstname?.message && <p className="text-[11px] text-red-500 mb-[.2rem]"> ({errors.firstname.message})</p>}
            </div>
            <input {...register("firstname")} type="text" id="fname" name="firstname" className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[13px]" placeholder="Robert Lustig"/>

            <div className="flex items-center justify-start space-x-1">
              <label className="block mb-1 text-[13px]"><i className="fa fa-envelope"></i> Email</label>
              {errors.email?.message && <p className="text-[11px] text-red-500 mb-[.2rem]"> ({errors.email.message})</p>}
            </div>
            <input {...register('email')} type="text" id="email" name="email" className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[13px]" placeholder="robert1268@example.com"/>

            <div className="flex items-center justify-start space-x-1">
              <label className="block mb-1 text-[13px]"><i className="fa fa-address-card-o"></i> Address</label>
              {errors.address?.message && <p className="text-[11px] text-red-500 mb-[.2rem]"> ({errors.address.message})</p>}
            </div>
            <input {...register('address')} type="text" id="adr" name="address" className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[13px]" placeholder="1234 Elm Street, Springfield, IL"/>

            <div className="flex items-center justify-start space-x-1">
              <label className="block mb-1 text-[13px]"><i className="fa fa-institution"></i> City</label>
              {errors.city?.message && <p className="text-[11px] text-red-500 mb-[.2rem]"> ({errors.city.message})</p>}
            </div>
            <input {...register('city')} type="text" id="city" name="city" className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[13px]" placeholder="Springfield"/>

            <div className="flex space-x-2">
              <div className="w-full md:w-1/2">
                <div className="flex items-center justify-start space-x-1">
                  <label className="block mb-1 text-[13px]">State</label>
                  {errors.state?.message && <p className="text-[11px] text-red-500 mb-[.2rem]"> ({errors.state.message})</p>}
                </div>
                <input {...register('state')} type="text" id="state" name="state" className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[13px]" placeholder="Illinois"/>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center justify-start space-x-1">
                  <label className="block mb-1 text-[13px]">Zip</label>
                  {errors.zip?.message && <p className="text-[11px] text-red-500 mb-[.2rem]"> ({errors.zip.message})</p>}
                </div>
                <input {...register('zip')} type="text" id="zip" name="zip" className="w-full py-1 px-2 border border-gray-300 rounded-md mb-2 text-[13px]" placeholder="62704"/>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="md:w-full w-[400px] bg-secondary text-white py-2 rounded-lg cursor-pointer hover:bg-primary transition-all text-[15px]">Proccess to Pay</button>
      </form>
    </div>

    {item && (
      <div className="order-1 w-full py-4 pl-12 md:w-1/2 md:order-2">
        <div className="px-2 py-0">
          <h3 className="mb-1 text-lg font-semibold leading-6 tracking-wider uppercase text-start">{item.title}</h3>
          <p className="font-light text-gray-600 sm:text-sm">{item.description}</p>
          <div className="my-2">
            <div className="flex items-center justify-start mb-1 space-x-1 text-start">
              <span className="text-[1.5rem]">$</span>
              <span className="text-[2rem] font-extrabold">{item.value}</span>
              <span className="leading-6 text-gray-600 lowercase text-end">/{item.time}</span>
            </div>
          </div>
          {item.points && (
            <ul className="my-2 space-y-1 text-left">
              {item.points.map((point, index) =>
                point && (
                  <li key={index} className="mb-1.5 flex items-start space-x-3 leading-7 text-[14px]">
                    <div className="mt-2">
                      <Check size='10' color='primary' />
                    </div>
                    <span>{point}</span>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
    )}
  </div>
</div>


  );
}
