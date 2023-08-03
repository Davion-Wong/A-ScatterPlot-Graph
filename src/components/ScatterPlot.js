import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

const ScatterPlot = () => {

  const dataSet = [
    {
      "Time": "36:50",
      "Place": 1,
      "Seconds": 2210,
      "Name": "Marco Pantani",
      "Year": 1995,
      "Nationality": "ITA",
      "Doping": "Alleged drug use during 1995 due to high hematocrit levels",
      "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
    },
    {
      "Time": "36:55",
      "Place": 2,
      "Seconds": 2215,
      "Name": "Marco Pantani",
      "Year": 1997,
      "Nationality": "ITA",
      "Doping": "Alleged drug use during 1997 due to high hermatocrit levels",
      "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
    },
    {
      "Time": "37:15",
      "Place": 3,
      "Seconds": 2235,
      "Name": "Marco Pantani",
      "Year": 1994,
      "Nationality": "ITA",
      "Doping": "Alleged drug use during 1994 due to high hermatocrit levels",
      "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
    },
    {
      "Time": "37:36",
      "Place": 4,
      "Seconds": 2256,
      "Name": "Lance Armstrong",
      "Year": 2004,
      "Nationality": "USA",
      "Doping": "2004 Tour de France title stripped by UCI in 2012",
      "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
    },
    {
      "Time": "37:42",
      "Place": 5,
      "Seconds": 2262,
      "Name": "Jan Ullrich",
      "Year": 1997,
      "Nationality": "GER",
      "Doping": "Confessed later in his career to doping",
      "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
    },
    {
      "Time": "38:05",
      "Place": 6,
      "Seconds": 2285,
      "Name": "Lance Armstrong",
      "Year": 2001,
      "Nationality": "USA",
      "Doping": "2001 Tour de France title stripped by UCI in 2012",
      "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
    },
    {
      "Time": "38:14",
      "Place": 7,
      "Seconds": 2294,
      "Name": "Miguel Indurain",
      "Year": 1995,
      "Nationality": "ESP",
      "Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
      "URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
    },
    {
      "Time": "38:14",
      "Place": 8,
      "Seconds": 2294,
      "Name": "Alex Zülle",
      "Year": 1995,
      "Nationality": "SUI",
      "Doping": "Confessed in 1998 to taking EPO",
      "URL": "https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair"
    },
    {
      "Time": "38:16",
      "Place": 9,
      "Seconds": 2296,
      "Name": "Bjarne Riis",
      "Year": 1995,
      "Nationality": "DEN",
      "Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
      "URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
    },
    {
      "Time": "38:22",
      "Place": 10,
      "Seconds": 2302,
      "Name": "Richard Virenque",
      "Year": 1997,
      "Nationality": "FRA",
      "Doping": "In 2000 confessed to doping during his career",
      "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
    },
    {
      "Time": "38:36",
      "Place": 11,
      "Seconds": 2316,
      "Name": "Floyd Landis",
      "Year": 2006,
      "Nationality": "USA",
      "Doping": "Stripped of 2006 Tour de France title",
      "URL": "https://en.wikipedia.org/wiki/Floyd_Landis_doping_case"
    },
    {
      "Time": "38:36",
      "Place": 12,
      "Seconds": 2316,
      "Name": "Andreas Klöden",
      "Year": 2006,
      "Nationality": "GER",
      "Doping": "Alleged use of illegal blood transfusions in 2006",
      "URL": "https://en.wikipedia.org/wiki/Andreas_Kl%C3%B6den#2009_Doping_allegations"
    },
    {
      "Time": "38:40",
      "Place": 13,
      "Seconds": 2320,
      "Name": "Jan Ullrich",
      "Year": 2004,
      "Nationality": "GER",
      "Doping": "Confessed later in his career to doping",
      "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
    },
    {
      "Time": "38:44",
      "Place": 14,
      "Seconds": 2324,
      "Name": "Laurent Madouas",
      "Year": 1995,
      "Nationality": "FRA",
      "Doping": "Tested positive for Salbutemol in 1994, suspended for 1 month",
      "URL": "http://www.dopeology.org/incidents/Madouas-positive/"
    },
    {
      "Time": "38:55",
      "Place": 15,
      "Seconds": 2335,
      "Name": "Richard Virenque",
      "Year": 1994,
      "Nationality": "FRA",
      "Doping": "In 2000 confessed to doping during his career",
      "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
    },
    {
      "Time": "39:01",
      "Place": 16,
      "Seconds": 2341,
      "Name": "Carlos Sastre",
      "Year": 2006,
      "Nationality": "ESP",
      "Doping": "",
      "URL": ""
    },
    {
      "Time": "39:09",
      "Place": 17,
      "Seconds": 2349,
      "Name": "Iban Mayo",
      "Year": 2003,
      "Nationality": "ESP",
      "Doping": "Failed doping test in 2007 Tour de France",
      "URL": "https://en.wikipedia.org/wiki/Iban_Mayo"
    },
    {
      "Time": "39:12",
      "Place": 18,
      "Seconds": 2352,
      "Name": "Andreas Klöden",
      "Year": 2004,
      "Nationality": "GER",
      "Doping": "Alleged doping during 2006 Tour de France",
      "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
    },
    {
      "Time": "39:14",
      "Place": 19,
      "Seconds": 2354,
      "Name": "Jose Azevedo",
      "Year": 2004,
      "Nationality": "POR",
      "Doping": "Implicated in the Operación Puerto doping case",
      "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
    },
    {
      "Time": "39:15",
      "Place": 20,
      "Seconds": 2355,
      "Name": "Levi Leipheimer",
      "Year": 2006,
      "Nationality": "USA",
      "Doping": "Testified in 2012 to doping during his time with US Postal Service ",
      "URL": "http://www.wsj.com/articles/SB10000872396390444799904578048352672452328"
    },
    {
      "Time": "39:22",
      "Place": 21,
      "Seconds": 2362,
      "Name": "Francesco Casagrande",
      "Year": 1997,
      "Nationality": "ITA",
      "Doping": "Positive testosterone test in 1998",
      "URL": "http://autobus.cyclingnews.com/results/1998/sep98/sep2.shtml"
    },
    {
      "Time": "39:23",
      "Place": 22,
      "Seconds": 2363,
      "Name": "Nairo Quintana",
      "Year": 2015,
      "Nationality": "COL",
      "Doping": "",
      "URL": ""
    },
    {
      "Time": "39:23",
      "Place": 23,
      "Seconds": 2363,
      "Name": "Bjarne Riis",
      "Year": 1997,
      "Nationality": "DEN",
      "Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
      "URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
    },
    {
      "Time": "39:30",
      "Place": 24,
      "Seconds": 2370,
      "Name": "Miguel Indurain",
      "Year": 1994,
      "Nationality": "ESP",
      "Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
      "URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
    },
    {
      "Time": "39:30",
      "Place": 25,
      "Seconds": 2370,
      "Name": "Luc Leblanc",
      "Year": 1994,
      "Nationality": "FRA",
      "Doping": "Admitted to using epo and amphetimines throughout 1994 ",
      "URL": "http://www.dopeology.org/people/Luc_Leblanc/"
    },
    {
      "Time": "39:32",
      "Place": 26,
      "Seconds": 2372,
      "Name": "Carlos Sastre",
      "Year": 2008,
      "Nationality": "ESP",
      "Doping": "",
      "URL": ""
    },
    {
      "Time": "39:37",
      "Place": 27,
      "Seconds": 2377,
      "Name": "Vladimir Poulnikov",
      "Year": 1994,
      "Nationality": "UKR",
      "Doping": "",
      "URL": ""
    },
    {
      "Time": "39:40",
      "Place": 28,
      "Seconds": 2380,
      "Name": "Giuseppe Guerini",
      "Year": 2004,
      "Nationality": "ITA",
      "Doping": "",
      "URL": ""
    },
    {
      "Time": "39:41",
      "Place": 29,
      "Seconds": 2381,
      "Name": "Santos Gonzalez",
      "Year": 2004,
      "Nationality": "ESP",
      "Doping": "High Hematocrit during 2005 season, removed by team management",
      "URL": "http://www.cyclingnews.com/news/santos-gonzalez-sacked-by-phonak/"
    },
    {
      "Time": "39:41",
      "Place": 30,
      "Seconds": 2381,
      "Name": "Vladimir Karpets",
      "Year": 2004,
      "Nationality": "RUS",
      "Doping": "Made payments to Ferrari, but no charges filed",
      "URL": "http://www.dopeology.org/incidents/Ferrari-investigation/"
    },
    {
      "Time": "39:45",
      "Place": 31,
      "Seconds": 2385,
      "Name": "Fernando Escartin",
      "Year": 1995,
      "Nationality": "ESP",
      "Doping": "Implicated in Giardini Margherita Raid in 1998 as a 'victim' ",
      "URL": "http://www.dopeology.org/incidents/Giardini-Margherita-raid-%5bBologna%5d/"
    },
    {
      "Time": "39:47",
      "Place": 32,
      "Seconds": 2387,
      "Name": "Denis Menchov",
      "Year": 2006,
      "Nationality": "RUS",
      "Doping": "",
      "URL": ""
    },
    {
      "Time": "39:47",
      "Place": 33,
      "Seconds": 2387,
      "Name": "Michael Rasmussen",
      "Year": 2006,
      "Nationality": "DEN",
      "Doping": "Admitted to doping with multiple substances 1998-2010",
      "URL": "http://www.dopeology.org/people/Michael_Rasmussen/"
    },
    {
      "Time": "39:47",
      "Place": 34,
      "Seconds": 2387,
      "Name": "Pietro Caucchioli",
      "Year": 2006,
      "Nationality": "ITA",
      "Doping": "Associated with Mantova investigation, charges dropped",
      "URL": "http://www.cyclingnews.com/news/italian-judge-set-to-decide-if-32-named-in-mantova-doping-investigation-should-go-on-trial/"
    },
    {
      "Time": "39:50",
      "Place": 35,
      "Seconds": 2390,
      "Name": "Nairo Quintana",
      "Year": 2013,
      "Nationality": "COL",
      "Doping": "",
      "URL": ""
    }
  ]

  const margin = {top: 70, right: 190, bottom: 70, left: 190},
        width = 1000 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

  const ref = useRef();

  useEffect(() => {
    let svg = d3.select(ref.current);

    if (svg.select('g').empty()) {
      svg = svg
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
    } else {
      svg = svg.select('g');
    }

    const xDomain = d3.extent(dataSet, d => d.Year);
    const yDomain = d3.extent(dataSet, d => d.Seconds);

    const xPadding = (xDomain[1] - xDomain[0]) * 0.05;
    const yPadding = (yDomain[1] - yDomain[0]) * 0.05;

    const xScale = d3.scaleLinear()
                     .domain([xDomain[0] - xPadding, xDomain[1] + xPadding])
                     .range([0, width]);

    const yScale = d3.scaleLinear()
                     .domain([yDomain[0] - yPadding, yDomain[1] + yPadding])
                     .range([0, height]);
 
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale)
                    .tickFormat( d => {
                      const minutes = Math.floor(d / 60);
                      const seconds = +d %60;
                      return `${minutes}: ${seconds < 10 ? "0" : ""}${seconds}`;
                    });

    svg.append("g")
       .attr("id", "x-axis")
       .attr('transform', 'translate(0,' + height + ')')
       .call(xAxis);

    svg.append("g")
      .attr("id", "y-axis")
      .call(yAxis);

    const color = d3.scaleOrdinal()
                    .domain(['Doping', 'No Doping'])
                    .range(['#7C238C', '#5863F8']);

    const tooltip = svg
                    .append("g")
                    .attr("id", "tooltip")
                    .style("pointer-events", "none");

    const tooltipRect = tooltip
                        .append("rect")
                        .attr("width", 600)
                        .attr("height", 40)
                        .attr("rx", 10)
                        .attr("ry", 10)
                        .style("fill", "cyan")
                        .style("opacity", 0)
                        .attr("border-radius", "20px");

    const tooltipText1 = tooltip
                        .append("text")
                        .attr("x", 10)
                        .attr("y", 15)

    const tooltipText2 = tooltip
                        .append("text") 
                        .attr("x", 10)
                        .attr("y", 35)

    svg.selectAll('.dot')
       .data(dataSet)
       .enter()
       .append('circle')
       .attr("class", "dot")
       .attr('cx', d => xScale(d.Year))
       .attr('cy', d => yScale(d.Seconds))
       .attr('data-xvalue', d => xScale(d.Year))
       .attr('data-yvalue', d => yScale(d.dateObj))
       .attr('r', 5)
       .style("fill", d => color(d.Doping ? "Doping" : "No Doping"))
       .on('mouseover', (event, d, i) => {
          d3.select(event.currentTarget)
            .attr('r', 10);
          const [x, y] = d3.pointer(event);          
          tooltip
            .attr("data-Year", d.Year)
            .attr('transform', `translate(${x + 10}, ${y - 30})`)
            .style("opacity", 1);
          tooltipRect
            .style("opacity", 1);
          tooltipText1
            .text(`${d.Name}, ${d.Nationality}, ${d.Year}`);
          tooltipText2
            .text(`${d.Doping}`);
          
          const text1BBox = tooltipText1.node().getBBox();
          const text2BBox = tooltipText2.node().getBBox();
          const tooltipRectWidth = Math.max(text1BBox.width, text2BBox.width) + 20;
          tooltipRect.attr("width", tooltipRectWidth);

          d3.select(event.Target)
            .attr("fill", "red");
          })
       .on("mouseout", function (event, d) {
          d3.select(event.currentTarget)
            .attr('r', 5);
          tooltip.style("opacity", 0);
          tooltipRect
            .style("opacity", 0);
         d3.select(event.Target)
           .attr("fill", color(d.Doping ? "Doping" : "No Doping"));
       });

    const legend = svg.append("g")
                      .attr("id", "legend")
                      .attr("transform", "translate(" + (width - 100) + ", 40)");
    
    legend.selectAll("rect")
          .data(color.domain())
          .enter()
          .append("rect")
          .attr("y", (d, i) => i * 20)
          .attr("height", 18)
          .attr("width", 18)
          .style("fill", color);

    legend.selectAll("text")
          .data(color.domain())
          .enter()
          .append("text")
          .attr("x", 24)
          .attr("y", (d, i) => i * 20)
          .attr("dy", "0.9em")
          .text(d => d);

  }, [dataSet, height, margin, width]);

  return (
    <div>
      <h1 id="title">Doping in Professional Bicycle Racing</h1>
      <h3 id="subtitle">A ScatterPlot Data Visualization</h3>
      <svg ref={ref} />
    </div>
  );
}

export default ScatterPlot;