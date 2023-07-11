import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
import NewsCard from "../../components/NewsCard/NewsCard";
import OpenGraphTags from "../../components/OpenGraphTags/OpenGraphTags";
import { GET_GALLERY_DATA, IMAGE_BASE_URL } from "../../utils/apiConstants";
import { get } from "../../utils/apiMethods";
import { gallerypagedata } from "../../utils/seoConstants";
import ReactPaginate from "react-paginate";
const itemsPerPage = 5;
export default class Gallery extends Component {
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
    window.scrollTo(0, 0);
    this.setState({ loader: true });
    const data = await get({ url: GET_GALLERY_DATA });
    const fildata = data.filter((filter) => filter.type === "gallery");

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
    const current = galleryData.filter((data) => data.type === "gallery");
    this.setState({
      currentItems: current.slice(itemOffset, endOffset),
      pageCount: Math.ceil(current.length / itemsPerPage),
    });
  };

  handlePageClick = (event) => {
    const { itemOffset, galleryData } = this.state;
    const current = galleryData.filter((data) => data.type === "gallery");
    const newOffset = (event.selected * itemsPerPage) % current.length;

    this.setState({ itemOffset: newOffset }, () => {
      this.handlePagination();
    });
  };
  render() {
    const { galleryData, homeData, loader, pageCount, currentItems } =
      this.state;
    const { isHome } = this.props;
    console.log("page", pageCount);
    return (
      <div>
        <OpenGraphTags ogtags={gallerypagedata} />

        <header class="page-header">
          <h1 class={isHome ? "entry-title1" : "entry-title"}>GALLERY</h1>
        </header>
        {loader ? (
          <Loader />
        ) : (
          <>
            {isHome && isHome ? (
              <div className="row">
                {homeData &&
                  homeData.map((data, i) => {
                    return (
                      <>
                        {data && data.type === "gallery" ? (
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
                        {data && data.type === "gallery" ? (
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
