import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch } from "react-redux";
import {setFilters} from "../logSlice";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function CheckboxLabels() {
  const [levels, setLevels] = useState([]);
  console.log("level: ", levels);
  const [components, setComponents] = useState([]);
  console.log("component: ", components);
  const [hosts, setHosts] = useState([]);
  console.log("host: ", hosts);
  const [requestId, setRequestId] = useState("");
  console.log("requestId: ", requestId);
  const [startTime, setStartTime] = useState(null);
  console.log("startTime: ", startTime);
  const [endTime, setEndTime] = useState(null);
  console.log("endTime: ", endTime);

  const filter = {
    level: levels,
    component: components,
    host: hosts,
    requestId:requestId,
     startTime: startTime
      ? dayjs(startTime).format("YYYY-MM-DD HH:mm:ss")
      : null,
    endTime: endTime ? dayjs(endTime).format("YYYY-MM-DD HH:mm:ss") : null,
  };
  console.log("filter: ", filter);

  const dispatch=useDispatch()

  
  const handleCheckbox = (value, list, setList) => {
    setList(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
    );
  };

const Pill = ({ label, isActive, onClick }) => {
  // COLOR MAPPING
  const colors = {
    INFO: "bg-blue-500 text-white",
    WARN: "bg-orange-500 text-white",
    ERROR: "bg-red-600 text-white",
    DEBUG: "bg-gray-500 text-white",

    "api-server": "bg-indigo-500 text-white",
    database: "bg-emerald-600 text-white",
    cache: "bg-yellow-600 text-white",
    worker: "bg-teal-600 text-white",
    auth: "bg-pink-600 text-white",

    web01: "bg-sky-600 text-white",
    web02: "bg-blue-700 text-white",
    cache01: "bg-yellow-700 text-white",
    worker01: "bg-green-700 text-white",
    db01: "bg-purple-700 text-white"
  };

  const activeColor = colors[label] || "bg-gray-400 text-white";

  return (
    <div
      className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition 
      border border-gray-300
      ${isActive ? activeColor : "bg-white text-gray-700"}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

  return (
  <>
    <CssBaseline />
    <Container maxWidth="md" className="mt-10">
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-xl border">

        <FormGroup className="space-y-8">
                {/* LEVEL */}
                <div className="p-3 bg-gray-50 rounded-lg">
                  <label className="font-semibold text-lg mb-2 block">Level</label>

                  <div className="grid grid-cols-4 gap-2">
                    {["INFO", "WARN", "ERROR", "DEBUG"].map((lvl) => (
                      <Pill
                        key={lvl}
                        label={lvl}
                        isActive={levels.includes(lvl)}
                        onClick={() => handleCheckbox(lvl, levels, setLevels)}
                      />
                    ))}
                  </div>
                </div>



              {/* COMPONENT */}
              <div className="p-3 bg-gray-50 rounded-lg">
                <label className="font-semibold text-lg mb-2 block">Component</label>

                <div className="grid grid-cols-5 gap-2">
                  {["api-server", "database", "cache", "worker", "auth"].map((cmp) => (
                    <Pill
                      key={cmp}
                      label={cmp}
                      isActive={components.includes(cmp)}
                      onClick={() => handleCheckbox(cmp, components, setComponents)}
                    />
                  ))}
                </div>
              </div>



            {/* HOST */}
            <div className="p-3 bg-gray-50 rounded-lg">
              <label className="font-semibold text-lg mb-2 block">Host</label>

              <div className="grid grid-cols-5 gap-2">
                {["web01", "web02", "cache01", "worker01", "db01"].map((hst) => (
                  <Pill
                    key={hst}
                    label={hst}
                    isActive={hosts.includes(hst)}
                    onClick={() => handleCheckbox(hst, hosts, setHosts)}
                  />
                ))}
              </div>
            </div>


          {/* REQUEST ID */}
          <div>
            <label className="font-semibold text-lg mb-2 block">Request ID</label>
            <TextField
              fullWidth
              label="Enter Request ID"
              variant="outlined"
              value={requestId}
              onChange={(e) => setRequestId(e.target.value)}
            />
          </div>

          {/* DATE RANGE */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="grid grid-cols-2 gap-6">
              <DateTimePicker
                label="Start Time"
                ampm={false}
                value={startTime}
                slotProps={{
                  textField: { fullWidth: true }
                }}
                onChange={(newValue) => setStartTime(newValue)}
              />
              <DateTimePicker
                label="End Time"
                ampm={false}
                value={endTime}
                slotProps={{
                  textField: { fullWidth: true }
                }}
                onChange={(newValue) => setEndTime(newValue)}
              />
            </div>
          </LocalizationProvider>

         <button
  className="
    px-8 py-3 rounded-lg 
    bg-emerald-600 text-white font-semibold 
    shadow-md hover:bg-emerald-700 
    transition-all duration-300
  "
  onClick={() => dispatch(setFilters(filter))}
>
  Search
</button>
        </FormGroup>
      </div>
    </Container>
  </>
);
}
