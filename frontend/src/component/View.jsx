import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const View = () => {
  var [emp, setEmp] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3004/view")
      .then((res) => {
        console.log(res);
        setEmp(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const delValue = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3004/remove/" + id)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const updateValue = (val) => {
    console.log("up clicked");
    navigate("/a", { state: { val } });
  };
  return (
    <div style={{ margin: "2%" }}>
      <Grid container spacing={2}>
        {emp.map((val, i) => {
          return (
            <Grid item xs={12} md={4}>
              <Card sx={{ minWidth: 275 }} key={i}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Name:{val.Name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Age:{val.Age}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Department:{val.Dept}
                  </Typography>
                  <Typography variant="body2">
                    Salary:{val.Sal}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      delValue(val._id);
                    }}
                  >
                    Del
                  </Button>
                  <Button
                    size="small"
                    onClick={() => {
                      updateValue(val);
                    }}
                  >
                    Up
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default View;
