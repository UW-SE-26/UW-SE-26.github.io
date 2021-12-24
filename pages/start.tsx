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
              ["Urdu", 2],
              ["Bengali", 3],
              ["Other", 5],
            ]}
            options={{
              title: "Languages Spoken",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Languages Spoken</Text>
          <Text fontSize="xl">*Participants were allowed to select multiple options</Text>
          <Text fontSize="xl">**Languages with only 1 respondents were added to the Other category</Text>
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
              ["Atheist", 34],
              ["Agnostic", 20],
              ["Hindu", 19],
              ["Christian", 13],
              ["Catholic", 12],
              ["Muslim", 7],
              ["Spiritual (non-religious)", 9],
              ["Other/unsure", 6],
            ]}
            options={{
              title: "Religion",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Religion</Text>
          <Text fontSize="xl">*Participants were allowed to select multiple options</Text>
          <Text fontSize="xl">**Religions with few respondents were added to the Other category</Text>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box>
          <Chart
            width="1000px"
            height="450px"
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Answer", "Count"],
              ["1", 11],
              ["2", 43],
              ["3", 43],
              ["4", 6],
              ["5", 2],
            ]}
            options={{
              title: "Political Lean",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Political Lean</Text>
          <Text fontSize="xl">*Lower number represents further politically left, higher number represents further politically right</Text>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box>
          <Chart
            width="500px"
            height="400px"
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ["Answer", "Count"],
              ["Heterosexual", 103],
              ["Bisexual", 5],
              ["Other", 4],
            ]}
            options={{
              title: "Sexual Orientation",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Sexual Orientation</Text>
          <Text fontSize="xl">*Sexual orientations with few respondents were added to the Other category to preserve anonymity</Text>
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
              ["International", 22],
              ["Domestic", 95],
            ]}
            options={{
              title: "International / Domestic Student ?",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">International / Domestic Student ?</Text>
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
              ["Canada, Ontario", 19],
              ["Canada, Alberta", 5],
              ["Canada, Quebec", 3],
              ["Canada, British Columbia", 10],
              ["Canada, Other Provinces / Unspecified", 2],
              ["USA", 4],
              ["India", 3],
              ["China", 2],
              ["Other Countries", 6],
            ]}
            options={{
              title: "Where do you call home?",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Where do you call home?</Text>
          <Text fontSize="xl">*Countries/provinces with few responses were put into the other countries / other provinces categories</Text>
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
              ["AP", 40],
              ["CBSE", 8],
              ["CEGEP", 4],
              ["Gifted", 9],
              ["IB", 16],
              ["Language Immersion", 4],
              ["TOPS", 3],
              ["Other Academic Enrichment Programs", 7],
              ["None", 24],
            ]}
            options={{
              title: "Academic Enrichment Programs",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Academic Enrichment Programs</Text>
          <Text fontSize="xl">*Academic enrichment programs with few responses were added to the Other category</Text>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box>
          <Chart
            width="1000px"
            height="450px"
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Answer", "Count"],
              ["0", 21],
              ["1", 75],
              ["2", 17],
              ["3", 3],
              ["5", 1],
              ["9", 1],
            ]}
            options={{
              title: "Number of Siblings",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Number of Siblings</Text>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <Box>
          <Chart
            width="1000px"
            height="450px"
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Answer", "Count"],
              ["up to $25,000", 2],
              ["$25k to $50k", 7],
              ["$50k to $75k", 8],
              ["$75k to $100k", 7],
              ["$100k to $150k", 34],
              ["$150k to $200k", 19],
              ["$200 to $300k", 9],
              ["$300k to $500k", 4],
              ["$500k+", 2],
              ["Unknown", 19],
            ]}
            options={{
              title: "Family Total Combined Income",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Family Total Combined Income</Text>
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
              ["Yes", 87],
              ["No", 31],
            ]}
            options={{
              title: "Is at least one of your parents/guardians a Canadian immigrant?",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Is at least one of your parents/guardians a Canadian immigrant?</Text>
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
              ["High School", 3],
              ["College Diploma", 8],
              ["Bachelors Degree", 45],
              ["Masters Degree", 44],
              ["PhD", 11],
              ["Other Post-Secondary Degree", 2],
              ["Unknown", 3],
            ]}
            options={{
              title: "Parent/Guardian Highest Achieved Education Level",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Parent/Guardian Highest Achieved Education Level</Text>
          <Text fontSize="xl">*Education levels with few responses were added to the Other category</Text>
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
              ["Yes", 71],
              ["No", 47],
            ]}
            options={{
              title: "Parent(s)/Guardian(s) working in STEM?",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">Parent(s)/Guardian(s) working in STEM?</Text>
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
              ["Yes", 71],
              ["No", 47],
            ]}
            options={{
              title: "High School Admission Average",
            }}
          />
        </Box>
        <Box width="1000px">
          <Text fontSize="3xl">High School Admission Average</Text>
        </Box>
      </Flex>
    </>
  );
}
