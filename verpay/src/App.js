import "./App.css";
import iPhone from "./utils/iPhone.png";
import Logo from "./utils/AuthPage/SYF Logo.png";
import Clock from "./utils/AuthPage/Clock.png";
import GreenX from "./utils/AuthPage/Green X.png";
import RedX from "./utils/AuthPage/Red X.png";
import PersonIcon from "./utils/AuthPage/Person Icon.png";
import MapPin from "./utils/AuthPage/Map Pin.svg";

import {
  List,
  ListItem,
  Select,
  TextField,
  Card,
  CardContent,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";

function App() {
  // const names = ["Harsh", "Grant", "Madison", "Shubham", "Anthony"];
  const fieldTitle = [
    "Cardholder Name",
    "Merchant",
    "Longitude",
    "Latitude",
    "Amount",
  ];

  const City = "Champaign";
  const State = "IL";

  return (
    <div className="h-screen w-screen bg-[#34657F] flex flex-row">
      {/* iPhone content div */}

      <div className="h-full flex pl-[25%] justify-center items-center">
        {/* iPhone template */}
        <img
          src={iPhone}
          alt="iPhone"
          className="absolute bg-transparent h-[550px] w-[540px] z-10 translate-x-[6px]"
        />

        {/* iPhone white background */}
        <div className="bg-white h-[525px] w-[250px] rounded-[15%] z-0"></div>
        <div className="absolute">
          <Card className="!rounded-[15%]">
            <div className="flex flex-col justify-evenly items-center w-[250px] h-[525px]">
              <img className="w-1/3 mt-6" alt="SYF Logo" src={Logo} />
              <img className="w-3/5 -mt-8" alt="Person Icon" src={PersonIcon} />
              <Typography className="font-sans text-center !text-md">
                Did you just try to make a payment?
              </Typography>

              <div className="flex flex-row self-start ml-[15%] my-2 pb-4">
                <img className="w-[14px] my-1" alt="Clock" src={Clock} />{" "}
                <p className="text-[12px] ml-2 leading-none">
                  Just now <br />
                  <span className="my-0 text-[10px] text-blue-500 font-semibold">
                    {" "}
                    Today, July 26th at 8:42 AM
                  </span>
                </p>
              </div>

              <div className="flex flex-row self-start ml-[15%] -mt-[15%] pt-2">
                <img className="w-[14px] my-1" alt="Map Pin" src={MapPin} />
                <p className="text-[12px] ml-2 leading-none">
                  Near {City}, {State} <br />
                  <span className="my-0 text-[10px] text-blue-500 font-semibold">
                    {" "}
                    More Info
                  </span>
                </p>
              </div>

              <div className="flex flex-row w-full justify-evenly mb-6">
                <div className="w-2/5 flex flex-col items-center">
                  <Button className="w-1/2">
                    <img alt="Green Check" src={GreenX} />
                  </Button>
                  <p className="text-center font-sans text-sm">Yes, it's me</p>
                </div>
                <div className="w-2/5 flex flex-col items-center">
                  <Button className="w-1/2">
                    <img alt="Red X" src={RedX} />
                  </Button>
                  <p className="text-center font-sans text-sm">
                    No, it's not me
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="w-[350px] flex flex-col items-center justify-center ml-[10%]">
        <Card className="h-4/5 w-4/5 shadow-black shadow-xl !rounded-xl flex flex-col items-center justify-evenly">
          {/* Control Title */}
          <Typography>
            <h1 className="pl-4 pt-4 pb-0 mb-0 font-bold font-sans">
              Customer Payment Info
            </h1>
          </Typography>

          <List>
            {/* <p className="pl-4">Cardholder Name</p>
            <ListItem>
              <FormControl className="w-full">
                <InputLabel className="bg-white">Cardholder Name</InputLabel>
                <Select className="!py-0 !my-0 h-[36px]" props={names}>
                  {names.map((x) => (
                    <MenuItem value={x}>{x}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </ListItem> */}
            {fieldTitle.map((title) => (
              <div className="mb-8 h-[36px]">
                <p className="pl-4 font-semibold font-sans">{title}</p>
                <ListItem className="w-full !py-0">
                  <TextField size="small" className="w-full h-[12px]" />
                </ListItem>
              </div>
            ))}
          </List>
          <Button className="!bg-sky-800 !rounded-md pb-4 !text-white !font-sans !font-bold !text-xl">
            Initiate Payment
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default App;
