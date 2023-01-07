import { useRouter } from "next/router";

export default function Hero({ heading, message, button = false }) {
  const router = useRouter();
  const handleButton = () => {
    router.push('/about');
  };

  return (
    <>
      
    </>
  );
}
