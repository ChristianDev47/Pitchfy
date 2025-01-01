import { useEffect } from "react";
import { UpdatePlan } from "~/services/payment";

const Process = (sesionId: string) => {
  
  useEffect(() => {
    const redirect = async () => {
      const data = await UpdatePlan(sesionId)
      if (data.message === 'Success'){
        window.location.href = 'https://pitchfy.zapier.app/'
      }else{
        window.location.href = '/'
      }
    }
    redirect()
  }, []);

  return ''
};

export default Process;
