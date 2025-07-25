import'./Home.css'

function Titulo() {
    return <h1>
            Home
            </h1>
}

function Marco() {
    return  (
    <div className="marco" >
        
    </div>)
}


function Home() {
    return (
        <div>
            <Titulo/>
            <Marco/>
        </div>
    )
}

export default Home;  
