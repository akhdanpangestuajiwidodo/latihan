import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Post from "../components/Posts";

const dataDummy = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];

function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(0);
  const [data, setData] = useState([]);

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
          setDataPerPage(data.results.length);
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
          setDataPerPage(data.results.length);
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
          <Pagination
            data={data}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={dataPerPage}
            setCurrentPage={(page) => {
              setCurrentPage(page);
            }}
          />
        </tbody>
      </table>
    </div>
  );
}

export default HomeScreen;
