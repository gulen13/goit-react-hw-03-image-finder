import { Component } from 'react';
import * as ImageService from 'service/image-service';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Text } from './Text/Text.styled';
import { Container } from './Container/Container.styled';

class App extends Component {
  state = {
    value: '',
    page: 1,
    items: [],
    isLoading: false,
    isEmpty: false,
    showBtn: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.state;
    if (prevState.value !== value || prevState.page !== page) {
      this.setState({ isLoading: true });
      ImageService.getImages(value, page)
        .then(({ hits, total }) => {
          if (!hits.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            items: [...prevState.items, ...hits],
            showBtn: page < Math.ceil(total / 12),
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = query => {
    this.setState({
      value: query,
      page: 1,
      items: [],
      isLoading: false,
      isEmpty: false,
      showBtn: false,
      error: null,
    });
  };

  handleButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { items, isEmpty, showBtn, error, isLoading } = this.state;

    return (
      <Container>
        <Searchbar handleSubmit={this.handleSubmit} />
        {isEmpty && (
          <Text>Sorry. There are no images on your search ... 😭</Text>
        )}
        <ImageGallery gallery={items} />
        {showBtn && <Button onClick={this.handleButton} />}
        {isLoading && <Loader />}
        {error && <Text>Sorry. {error} 😭</Text>}
      </Container>
    );
  }
}

export default App;
