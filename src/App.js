import { Component } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import data from "./data/data.json";
import { getReucedData } from "./tools/getReducedData";
import { GalleryList } from "./components/Gallery/GalleryList";
import { Modal } from "./components/Modal/Modal";

export default class App extends Component {
  state = { isShown: false, movies: getReucedData(data), currentImage: "" };

  handler = () => {
    this.setState({ isShown: true });
  };

  closeModal = () => {
    this.setState({ currentImage: "" });
  };

  removeItem = (idToDelete) => {
    this.setState((prevState) => ({
      movies: prevState.movies.filter(({ id }) => id !== idToDelete),
    }));
  };

  updateStatus = (idToUpdate) => {
    this.setState((prevState) => ({
      movies: prevState.movies.map((item) => {
        if (item.id !== idToUpdate) {
          return item;
        }
        return { ...item, watched: !item.watched };
      }),
    }));
  };

  openModal = (imgUrl) => {
    this.setState({ currentImage: imgUrl });
  };

  render() {
    const { isShown, movies, currentImage } = this.state;
    return (
      <div>
        {isShown ? (
          <GalleryList
            movies={movies}
            removeItem={this.removeItem}
            updateStatus={this.updateStatus}
            openModal={this.openModal}
          />
        ) : (
          <Button
            handler={this.handler}
            type="button"
            textContent="Show films list"
          />
        )}
        {currentImage && (
          <Modal imageUrl={currentImage} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}
