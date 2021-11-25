import React from "react";
import { Chart } from "react-google-charts";
import { Flex, Box, Text } from "@chakra-ui/react";

export default function Term() {
  return (
    <>
      <Flex justifyContent="center">
        <Box>
          <Chart
            width="1000px"
            height="450px"
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Gender", "Count"],
              ["Male", 69],
              ["Female", 49],
            ]}
            options={{
              title: "Gender",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Gender</Text>
          <Text fontSize="xl">Our cohort was the most diverse gender-wise ever!</Text>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box>
          <Chart
            width="1000px"
            height="450px"
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Year", "Count"],
              ["2001", 1],
              ["2002", 14],
              ["2003", 100],
              ["2004", 3],
            ]}
            options={{
              title: "Year of Birth",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Year of Birth</Text>
          <Text fontSize="xl"></Text>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box>
          <Chart
            width="1000px"
            height="450px"
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Year", "Count"],
              ["2001", 1],
              ["2002", 14],
              ["2003", 100],
              ["2004", 3],
            ]}
            options={{
              title: "Year of Birth",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Year of Birth</Text>
          <Text fontSize="xl"></Text>
        </Box>
      </Flex>
    </>
  );
}
