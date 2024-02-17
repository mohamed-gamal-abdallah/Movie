
import Tranding from"../../components/tranding/Tranding"
import header1 from "../../images/wp3733071.jpg";
function Home() {
	return (
		<>
			
			<div className="m-0 p-0 bg-black">
				<div className="container  px-0">
					<img src={header1} alt="" height={500} className="w-100" />
				</div>
                <Tranding/>
			</div>
		</>
	);
}

export default Home;
