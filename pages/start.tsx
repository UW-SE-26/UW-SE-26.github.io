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
              ["Race/Ethnicity", "Count"],
              ["East Asian", 54],
              ["South Asian", 34],
              ["Southeast Asian", 7],
              ["White", 19],
              ["Middle Eastern / Central Asia", 3],
              ["Indigenous Peoples", 3],
              ["Black/African", 1],
            ]}
            options={{
              title: "Race/Ethnicity",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Race/Ethnicity</Text>
          <Text fontSize="xl">*Participants were allowed to select multiple options</Text>
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
              ["Answer", "Count"],
              ["Yes", 64],
              ["No", 42],
            ]}
            options={{
              title: "Visible Minority",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Are you a visible minority?</Text>
          <Text fontSize="xl">*A better question would have been: Do you consider yourself a visible minority?</Text>
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
              ["Answer", "Count"],
              ["Canadian", 74],
              ["Chinese", 20],
              ["Indian", 22],
              ["American", 5],
              ["Other", 15],
            ]}
            options={{
              title: "Nationality/Citizenship",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Nationality/Citizenship</Text>
          <Text fontSize="xl">*Participants were allowed to select multiple options</Text>
          <Text fontSize="xl">**Countries with 2 or less respondents were added to the Other category</Text>
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
              ["Answer", "Count"],
              ["English", 65],
              ["Mandarin", 18],
              ["Cantonese", 5],
              ["Chinese (Unspecified)", 6],
              ["French", 27],
              ["Hindi", 16],
              ["Tamil", 4],
              ["Gujarati", 4],
              ["Punjabi", 4],
              ["Albanian", 4],
              ["Farsi", 4],
              ["Spanish", 3],
              ["Korean", 1],
              ["Malay", 1],
              ["Pashto", 1],
              ["Romanian", 1],
              ["Urdu", 2],
              ["Turkish", 1],
              ["Bengali", 3],
            ]}
            options={{
              title: "Languages Spoken",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Languages Spoken</Text>
          <Text fontSize="xl">*Participants were allowed to select multiple options</Text>
          <Text fontSize="xl">**Languages with 2 or less respondents were added to the Other category</Text>
          <Text fontSize="xl">Other languages spoken include: Urdu, Russian, Korean, Malay, Arabic, Tamil, and more...</Text>
        </Box>
      </Flex>
    </>
  );
}
