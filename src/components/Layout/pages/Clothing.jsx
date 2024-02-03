import TitleofLiberty from "../../../images/title-of-liberty.jpg"

function Clothing() {
  return (
    <div tag="main-body" className="flex grow flex-col">
      <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">
        <img src={TitleofLiberty} alt="Logo" className=" w-60 h-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-8 px-4 md:px-0">
          We're working hard to bring you something awesome. Stay tuned!
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="/" className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default Clothing
