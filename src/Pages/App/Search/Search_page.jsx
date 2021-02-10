import React, { useEffect, useState } from "react";
import { UdunkuluVector } from "../../../Assets/Images";
import { loadsearchResults } from "../../../store/searchSlice";
import { SearchResult } from "./SearchResult";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Search_page = (props) => {
  const [good, setGood] = useState(true);
  // useEffect(() => {
  //   props.loadsearchResults("uzzy");
  // }, [good]);
  console.log(props);
  return (
    <div>
      {props.searchResults && props.searchResults.artists&&props.searchResults.artists&&props.searchResults.artists ? (
        <SearchResult
          artists={props.searchResults.artists}
          songs={props.searchResults.songs}
          albums={props.searchResults.albums}
        />
      ) : (
        <div class="search-container">
          <img src={UdunkuluVector} alt="Udunkulu" />
          <text class="mx-auto" id="text">
            Contents will appear when you search them
          </text>
        </div>
      )}
    </div>
  );
};

Search_page.propTypes = {
  loadsearchResults: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchResults: state.app.searchResults.list,
});
export default connect(mapStateToProps, {
  loadsearchResults,
})(Search_page);
