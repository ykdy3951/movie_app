import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section className='container'>
          <div className='movies'>
            <div className='movie'>
              <img
                src={location.state.poster}
                alt={location.state.title}
                title={location.state.title}
              />
              <div className='movie__data'>
                <h2 className='movie__title'>{location.state.title}</h2>
                <h4 className='movie__year'>{location.state.year}</h4>
                <ul className='movie__genres'>
                  {location.state.genres.map((genre, index) => {
                    return (
                      <li key={index} className='movie__genre'>
                        {genre}
                      </li>
                    );
                  })}
                </ul>
                <p className='movie__summary'>{location.state.summary}</p>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
