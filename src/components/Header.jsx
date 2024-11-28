const Header = ({bg='bg-indigo-600'}) => {
  return (
    <>{/* header section */}
    <header className={`${bg}  text-white text-center py-24`}>
      <h1 className="text-4xl xs:text-3xl md:text-5xl lg:text-6xl font-bold">Become a React Dev</h1>
      <p className="mt-4">Find the React job that fits your skill set</p>
    </header></>
  )
}

export default Header