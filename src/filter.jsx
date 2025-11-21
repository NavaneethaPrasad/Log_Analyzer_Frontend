import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

export default function CheckboxLabels() {
  const [levels, setLevels] = useState([]);
  const [components, setComponents] = useState([]);
  const [hosts, setHosts] = useState([]);
  const [requestId, setRequestId] = useState("");
  const [timeStamp, setTimeStamp] = useState("");

  const handleCheckbox = (value, list, setList) => {
    setList(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
    );
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="mt-10">
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl border">

          <FormGroup className="space-y-5">
            <div>
              <label className="font-semibold">Level:</label>
              <div className="flex gap-4 items-center mt-2">
                {["INFO", "WARN", "ERROR", "DEBUG"].map((lvl) => (
                  <FormControlLabel
                    key={lvl}
                    control={
                      <Checkbox
                        checked={levels.includes(lvl)}
                        onChange={() =>
                          handleCheckbox(lvl, levels, setLevels)
                        }
                      />
                    }
                    label={lvl}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="font-semibold">Component:</label>
              <div className="flex gap-4 items-center mt-2">
                {["api-server", "database", "cache", "worker", "auth"].map(
                  (cmp) => (
                    <FormControlLabel
                      key={cmp}
                      control={
                        <Checkbox
                          checked={components.includes(cmp)}
                          onChange={() =>
                            handleCheckbox(cmp, components, setComponents)
                          }
                        />
                      }
                      label={cmp}
                    />
                  )
                )}
              </div>
            </div>

            <div>
              <label className="font-semibold">Host:</label>
              <div className="flex gap-4 items-center mt-2">
                {["web01", "web02", "cache01", "worker01", "db01"].map((hst) => (
                  <FormControlLabel
                    key={hst}
                    control={
                      <Checkbox
                        checked={hosts.includes(hst)}
                        onChange={() =>
                          handleCheckbox(hst, hosts, setHosts)
                        }
                      />
                    }
                    label={hst}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="font-semibold">Request ID:</label>
              <TextField
                fullWidth
                label="Enter Request ID"
                variant="outlined"
                className="mt-1"
                value={requestId}
                onChange={(e) => setRequestId(e.target.value)}
              />
            </div>

            <div>
              <label className="font-semibold">Timestamp:</label>
              <TextField
                fullWidth
                label=">2025-11-17 10:00:00"
                variant="outlined"
                className="mt-1"
                value={timeStamp}
                onChange={(e) => setTimeStamp(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button className="bg-red-600 text-white px-5 py-2 rounded-md shadow">
                Search
              </button>
            </div>
          </FormGroup>
        </div>
      </Container>
    </>
  );
}
