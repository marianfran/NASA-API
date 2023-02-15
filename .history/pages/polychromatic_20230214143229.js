import axios from 'axios'
import { useEffect } from 'react'

export default function Polychromatic() {

    const [image, setImage] = useState([]);
    const [images, setImages] = useState([]);
    const [time, setTime] = useState("loading");
    const [date, setDate] = useState('');
    const [coords, setCoords] = useState({});

    const apiKey = "XtoTtwuXWDOAsFO9ZgRvn8X7qqZh2sbSPDlqb9RD"
    const url = `https://epic.gsfc.nasa.gov/api/natural?api_key=${apiKey}`

    const getPolychromaticData = async () => {
        const res = await axios.get(url);
        const data = await res.data;
        console.log(data);
    }

    useEffect(() => {
        getPolychromaticData();
    }, [])

  return (
    <>
    Polychromatic
    </>
  )
}