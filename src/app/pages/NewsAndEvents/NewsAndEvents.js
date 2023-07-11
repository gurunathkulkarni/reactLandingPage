import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../../components/Loader/Loader";
import NewsCard from "../../components/NewsCard/NewsCard";
import OpenGraphTags from "../../components/OpenGraphTags/OpenGraphTags";
import { GET_GALLERY_DATA, IMAGE_BASE_URL } from "../../utils/apiConstants";
import { get } from "../../utils/apiMethods";
import { newsdata } from "../../utils/seoConstants";
import "./NewsAndEvents.css";
const itemsPerPage = 5;
export default class NewsAndEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryData: [],
      homeData: [],
      loader: false,
      pageCount: 0,
      itemOffset: 0,
      currentItems: [],
    };
  }
  async componentDidMount() {
    this.setState({ loader: true });
    const data = await get({ url: GET_GALLERY_DATA });

    const fildata = data.filter((filter) => filter.type === "events");

    const homedata = fildata.slice(0, 3);
    if (homedata) {
      this.setState({ homeData: homedata });
    }
    const data1 = [...data];
    data1.forEach((element) => {
      element.images = JSON.parse(element.images);
    });

    if (data) {
      this.setState({ galleryData: data1, loader: false });
    } else {
      this.setState({ loader: false });
    }
    this.handlePagination();
  }

  handlePagination = () => {
    const { itemOffset, galleryData } = this.state;
    const endOffset = itemOffset + itemsPerPage;
    const current = galleryData.filter((data) => data.type === "events");
    this.setState({
      currentItems: current.slice(itemOffset, endOffset),
      pageCount: Math.ceil(current.length / itemsPerPage),
    });
  };

  handlePageClick = (event) => {
    const { itemOffset, galleryData } = this.state;
    const current = galleryData.filter((data) => data.type === "events");
    const newOffset = (event.selected * itemsPerPage) % current.length;

    this.setState({ itemOffset: newOffset }, () => {
      this.handlePagination();
    });
  };
  render() {
    const { galleryData, homeData, loader, currentItems, pageCount } =
      this.state;
    const { isHome } = this.props;

    return (
      <div>
        <OpenGraphTags ogtags={newsdata} />

        <header class="page-header">
          <h1 class={isHome ? "entry-title1" : "entry-title"}>
            NEWS AND EVENTS
          </h1>
        </header>
        {loader ? (
          <Loader />
        ) : (
          <>
            {isHome && isHome ? (
              <div className="row">
                {homeData &&
                  homeData.map((data) => {
                    return (
                      <>
                        {data && data.type === "events" ? (
                          <div className="col-md-4">
                            <NewsCard
                              titlee={data.title}
                              description={data.description}
                              images={data.images[0]}
                              isHome="true"
                              id={data.id}
                            />
                          </div>
                        ) : null}
                      </>
                    );
                  })}
              </div>
            ) : (
              <>
                {currentItems &&
                  currentItems.map((data) => {
                    return (
                      <>
                        {data && data.type === "events" ? (
                          <NewsCard
                            titlee={data.title}
                            description={data.description}
                            images={data.images[0]}
                            id={data.id}
                          />
                        ) : null}
                      </>
                    );
                  })}
                <div className="pagination_wrapper">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={this.handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}
