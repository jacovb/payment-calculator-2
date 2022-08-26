type Props = {
  start: boolean,
  setStart: React.Dispatch<React.SetStateAction<boolean>>
}

const Hero = ({start, setStart}: Props) => {

  const handleStart = () => {
    setStart(true)
  }

  console.log(start);

  return (
    <main id="home" className="container min-h-screen flex flex-col justify-center items-center mx-auto px-8 md:px-16 lg:px-24 w-[30rem] md:w-[40rem] lg:w-[50rem]">
      <h1 className="font-bold text-5xl text-white my-4">Payment Calculator</h1>
      <div className="flex justify-around w-full">
        <button className="px-5 py-2 my-4 bg-gray-300 text-lg rounded border border-black hover:bg-coral-red hover:text-white hover:shadow-button-strong transition ease-in-out" onClick={handleStart}>Start</button>
      </div>
    </main>
  )
}

export default Hero