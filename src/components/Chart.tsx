import React from 'react';
import styled from 'styled-components';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartWrapper = styled.div`
    margin-top: 2em;
    padding: 4px;
    @media (min-width: 800px) {
        /* padding: 0 20px; */
    }
`;

// HighCharts throws errors with TypeScript types
export default ({ data }: any) => {
    const options: Highcharts.Options = {
        chart: {
            backgroundColor: '#030915',
            marginLeft: 60,
        },
        title: {
            text: 'Prices over 30 days',
            style: {
                color: '#efefef',
                fontFamily: "'Roboto', sans-serif",
            },
        },
        plotOptions: {
            series: {
                lineWidth: 2,
                stickyTracking: true,
                color: '#fff',
            },
        },
        series: [
            {
                type: 'line',
                data: data.prices,
                name: 'Price €',
                color: '#fff',
                description: 'Price Eur',
            },
        ],
        yAxis: {
            labels: {
                style: {
                    color: '#efefef',
                    fontFamily: "'Roboto', sans-serif",
                },
            },
            title: {
                align: 'high',
                text: 'Prices in €',
                style: {
                    color: '#efefef',
                    'text-anchor': 'start',
                    fontFamily: "'Roboto', sans-serif",
                },
                rotation: 0,
                y: -20,
                x: 0,
            },
        },
        xAxis: {
            type: 'datetime',
            labels: {
                style: {
                    color: '#efefef',
                    fontFamily: "'Roboto', sans-serif",
                },
            },
        },
        tooltip: {
            formatter: function () {
                return (
                    '<b>' +
                    this.series.name +
                    '' +
                    parseFloat(this.y.toFixed(2)) +
                    '</b><br/>' +
                    '</b><br/>' +
                    Highcharts.dateFormat('%H:%M %b %e %Y ', this.x)
                );
            },
        },
    };

    return (
        <ChartWrapper>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </ChartWrapper>
    );
};
