import React, { useEffect } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import colors from "../../colors";

function NavSlider() {
  const router = useRouter();
  const [Value, setValue] = React.useState(0);
  const [TempValue, setTempValue] = React.useState(0);
  const terms = [
    "start",
    "1A",
    "1B",
    "WT1",
    "2A",
    "WT2",
    "2B",
    "WT3",
    "3A",
    "WT4",
    "3B",
    "WT5",
    "4A",
    "WT6",
    "4B",
  ];

  useEffect(() => {
    if (Value === 0) {
      router.push("/start");
    }
  }, []);

  const handleTempChange = (val) => {
    console.log("SLIDER_TEMP_VAL:", val);
    setTempValue(parseInt(val));
  };

  const handleChange = (val) => {
    console.log("SLIDER_VAL:", val);
    setValue(val);
    let term = terms[val];
    console.log("GOTO: ", term);
    router.push(`/${term}`);
  };

  return (
    <div>
      <Slider
        defaultValue={Value || 0}
        min={0}
        max={14}
        step={1}
        onChange={(val) => handleChange(val)}
      >
        <SliderTrack bg={colors.uweng.light}>
          <Box position="relative" right={10} />
          <SliderFilledTrack bg={colors.uweng.dark} />
        </SliderTrack>
        <SliderThumb boxSize={6} bg={colors.uweng.dark} />
      </Slider>
    </div>
  );
}

export default NavSlider;