import React from "react";
import Header from "../header";
import NavCard from "../navCard";

function Home() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return(
        <div styles={{ margin: "100px" }}>
            <Header />
            <p>{data}</p>
            <div>
                <NavCard type="I need supplies" />
                <NavCard type="I have supplies" />
                <NavCard type="I have lead" />
            </div>
        </div>
    );
}

export default Home;