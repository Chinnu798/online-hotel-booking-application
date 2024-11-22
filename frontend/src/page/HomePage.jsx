import Carousel from "./Carousel";
import GetAllLocations from "../LocationComponent/GetAllLocations";
import GetAllFacility from "../FacilityComponent/GetAllFacility";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HotelCard from "../HotelComponent/HotelCard";
import Video from "./Video";
import Footer from "./Footer";
import Aos from "aos"
import 'aos/dist/aos.css';

const HomePage = () => {
  const [hotels, setHotels] = useState([]);
  const { locationId } = useParams();

  useEffect(() => {
    const getAllHotels = async () => {
      const allHotels = await retrieveAllHotels();
      if (allHotels) {
        setHotels(allHotels.hotels);
      }
    };

    const getProductsByLocation = async () => {
      const allHotels = await retrieveProductsByLocation();
      if (allHotels) {
        setHotels(allHotels.hotels);
      }
    };

    if (locationId == null) {
      console.log("Location Id is null");
      getAllHotels();
    } else {
      console.log("Location Id is NOT null");
      getProductsByLocation();
    }
  }, [locationId]);

  const retrieveAllHotels = async () => {
    const response = await axios.get("http://localhost:8080/api/hotel/fetch");

    return response.data;
  };

  const retrieveProductsByLocation = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/hotel/location?locationId=" + locationId
    );

    return response.data;
  };

   
  useEffect(()=>{
      Aos.init({duration:2000})
  },[])

  return (
    <div className="container-fluid mb-2">
      {/* <div>
        <Video/>
      </div> */}
      <div className="p-3">
      <Carousel />
      </div>
      <div className="mt-2 mb-5">
        <div className="row">
          
          <div className="col" data-aos="fade-up">
            <div className="row row-cols-1 row-cols-md-5 g-3">
              {hotels.map((hotel) => {
                return <HotelCard item={hotel}/>;
              })}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
