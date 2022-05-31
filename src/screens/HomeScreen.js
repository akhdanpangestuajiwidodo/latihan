import React, { useState, useEffect } from "react";
import Post from "../components/Posts";

function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(499);
  const [totalPage] = useState(500);
  const [data, setData] = useState([]);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=be7ddc7074fe58edbe5eb7645a53072d&language=en-US&page=${currentPage}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setData(data.results);
        })
        .catch((error) => {
          console.log("data error bos", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=be7ddc7074fe58edbe5eb7645a53072d&language=en-US&page=${currentPage}`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw response;
        })
        .then((data) => {
          setData(data.results);
        })
        .catch((error) => {
          console.log("data error bos", error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchPost();
  }, [currentPage]);

  //change using next button
  function goToNextPage() {
    if (currentPage === totalPage) {
      setDisableNext(true);
      return;
    }
    setDisablePrev(false);
    setCurrentPage(currentPage + 1);
  }

  //change using prev button
  function goToPreviousPage() {
    if (currentPage === 1) {
      setDisablePrev(true);
      return;
    }
    setDisableNext(false);
    setCurrentPage(currentPage - 1);
  }

  //bikin group number pagination misal 1-5
  const pageLimit = 5;
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  //change using number
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <Post loading={loading} data={data} />
        </tbody>
      </table>
      <div className="pagination">
        {/* previous button */}
        <button onClick={goToPreviousPage} disabled={disablePrev}>
          prevPage
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button key={index} onClick={changePage}>
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button onClick={goToNextPage} disabled={disableNext}>
          nextPage
        </button>
      </div>
    </div>
  );
}

export default HomeScreen;
