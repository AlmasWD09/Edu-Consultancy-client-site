import Banner from "./Banner"
import PopularSubject from "./PopularSubject"
import Review from "./Review"
import StudyDestination from "./StudyDestination"


const Home = () => {
  return (
    <div>
      <Banner />
      <StudyDestination />
        <PopularSubject />
        {/* <Review /> */}
    </div>
  )
}

export default Home