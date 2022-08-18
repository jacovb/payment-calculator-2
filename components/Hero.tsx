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
    <main id="home" className="container bg-green-400 min-h-screen flex flex-col justify-center items-center mx-auto px-8 md:px-16 lg:px-24 w-full">
      <p className="px-40 bg-red-300 font-bold text-2xl">Welcome to the Payment Calculator</p>
      <div className="flex justify-around w-full">
        <button className="p-4 my-2 bg-gray-300 rounded" onClick={handleStart}>Start</button>
      </div>
    </main>
  )
}

export default Hero