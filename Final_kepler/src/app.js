// Copyright (c) 2018 Uber Technologies, Inc
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//

import React, { Component } from "react";
import { connect } from "react-redux";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import KeplerGl from "kepler.gl";

// Kepler.gl actions
import { addDataToMap } from "kepler.gl/actions";
// Kepler.gl Data processing APIs
import Processors from "kepler.gl/processors";
// Sample data
import mainConfig from './data/main-config';
//import mobileinc01 from "./data/01TelstraAir.csv.js";
import baseStation03 from "./data/03BaseStations.csv.js";
import pdhall05 from "./data/05PDHAll.csv.js";
import sdhall06 from "./data/06SDHAll.csv.js";
// Kepler.gl Schema APIs
import KeplerGlSchema from "kepler.gl/schemas";

// Component and helpers
import Button from "./button";
import downloadJsonFile from "./file-download";

//const MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoicm96YWpheSIsImEiOiJjamo2Y3cwaXowNm9wM3F1a3d0dzJzcTJiIn0.WBsD9q3CVzCcvLJPYjFO4w";

class App extends Component {
  componentDidMount() {
    // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
    // const data_01 = Processors.processCsvData(mobileinc01);
    // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
    // const data_02 = Processors.processCsvData(dropcall02);
    // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
    const data_03 = Processors.processCsvData(baseStation03);
    // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
    // const data_04 = Processors.processCsvData(nmExchange04);

    const data_05 = Processors.processCsvData(pdhall05);
    const data_06 = Processors.processCsvData(sdhall06);
    var data = data_03;
    // Create dataset structure
    // const dataset_01 = {
    //   data,
    //   info: {
    //     // `info` property are optional, adding an `id` associate with this dataset makes it easier
    //     // to replace it later
    //     id: "mobileinc01",
    //     label: "Mobile Incidents"
    //   }
    // };
    // data = data_02;
    // // Create dataset structure
    // const dataset_02 = {
    //   data,
    //   info: {
    //     // `info` property are optional, adding an `id` associate with this dataset makes it easier
    //     // to replace it later
    //     id: "dropcall02",
    //     label: "Drop Call (May)"
    //   }
    // };
    data = data_03;
    // Create dataset structure
    const dataset_03 = {
      data,
      info: {
        // `info` property are optional, adding an `id` associate with this dataset makes it easier
        // to replace it later
        id: "mobile_base_station_dataId",
        label: "Cafe Locations"
      }
    };
    data = data_06;
    // Create dataset structure
    const dataset_06 = {
      data,
      info: {
        // `info` property are optional, adding an `id` associate with this dataset makes it easier
        // to replace it later
        id: "sdh_alarm_dataId",
        label: "CLUE blocks"
      }
    };
    data = data_05;
    const dataset_05 = {
      data,
      info: {
        // `info` property are optional, adding an `id` associate with this dataset makes it easier
        // to replace it later
        id: "pdh_alarm_dataId",
        label: "Floor Space Forecast"
      }
    };
    // addDataToMap action to inject dataset into kepler.gl instance
    // I'm parsing them in as an array
    this.props.dispatch(addDataToMap({ datasets: [dataset_03,dataset_06,dataset_05], config: mainConfig}));

  }

  // This method is used as reference to show how to export the current kepler.gl instance configuration
  // Once exported the configuration can be imported using parseSavedConfig or load method from KeplerGlSchema
  getMapConfig() {
    // retrieve kepler.gl store
    const { keplerGl } = this.props;
    // retrieve current kepler.gl instance store
    const { map } = keplerGl;

    // create the config object
    return KeplerGlSchema.getConfigToSave(map);
  }

  // This method is used as reference to show how to export the current kepler.gl instance configuration
  // Once exported the configuration can be imported using parseSavedConfig or load method from KeplerGlSchema
  exportMapConfig = () => {
    // create the config object
    const mapConfig = this.getMapConfig();
    // save it as a json file
    downloadJsonFile(mapConfig, "kepler.gl.json");
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          minHeight: "70vh"
        }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <KeplerGl
              mapboxApiAccessToken={MAPBOX_TOKEN}
              id="map"
              width={width}
              height={height}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  dispatchToProps
)(App);
