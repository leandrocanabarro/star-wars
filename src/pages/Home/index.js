import React, { useState, useEffect } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Input from '~/components/Input';
import Loader from '~/components/Loader';
import Planet from '~/components/Planet';
import Starships from '~/components/Starships';
import api from '~/services/api';

import { Container, Text, BoldText, Buttons, List, Item, Line } from './styles';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [totalItemsPage, setTotalItemsPage] = useState(0);
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadPeoples = async () => {
      const result = await api(`people/?page=${page}&search=${query}`);

      const data = result.data.results.map((item) => {
        return {
          name: item.name,
          gender: item.gender,
          height: item.height,
          hair_color: item.hair_color,
          mass: item.mass,
          homeworld: item.homeworld,
          starships: item.starships,
        };
      });

      setItems(data);
      setPreviousPage(result.data.previous);
      setNextPage(result.data.next);
      setTotalItems(result.data.count);

      if (result.data.next) {
        setTotalItemsPage(
          result.data.count - result.data.results.length * page
        );
      }

      setLoading(false);
    };

    loadPeoples();
  }, [page, query]);

  function increment() {
    setPage(page + 1);
    setLoading(true);
    window.scrollTo(0, 0);
  }

  function decrement() {
    setPage(page - 1);
    setLoading(true);
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Container>
        {loading ? (
          <div className="loading">
            <Loader size="60" />
          </div>
        ) : (
          <div>
            <Input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="query"
              placeholder="Filter"
            />
            {totalItems > 0 ? (
              <div>
                <List>
                  {items.map((item, i) => {
                    const key = totalItemsPage + i;
                    return (
                      <Item key={key}>
                        <h2>{item.name}</h2>
                        <Image name={item.name} />
                        <Line />
                        <BoldText>Planet</BoldText>
                        <Planet homeworld={item.homeworld} />
                        {item.starships.length > 0 ? (
                          <div>
                            <BoldText>Starships</BoldText>
                            <Starships starships={item.starships} />
                          </div>
                        ) : (
                          ''
                        )}
                        <BoldText>Gender</BoldText>
                        <Text>{item.gender}</Text>
                        <BoldText>Height</BoldText>
                        <Text>{item.height}</Text>
                        <BoldText>Hair Color</BoldText>
                        <Text>{item.hair_color}</Text>
                        <BoldText>Mass</BoldText>
                        <Text>{item.mass}</Text>
                      </Item>
                    );
                  })}
                </List>
                {totalItems > 10 ? (
                  <Buttons>
                    <Button
                      onClick={() => decrement()}
                      disabled={!previousPage}
                    >
                      <FiArrowLeftCircle
                        size={25}
                        className="arrow_left"
                        title="Previous"
                      />
                    </Button>
                    <Text className="info">
                      Showing <BoldText>{totalItemsPage}</BoldText> of{' '}
                      <BoldText>{totalItems}</BoldText> entries
                    </Text>
                    <Button onClick={() => increment()} disabled={!nextPage}>
                      <FiArrowRightCircle
                        size={25}
                        className="arrow_right"
                        title="Next"
                      />
                    </Button>
                  </Buttons>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <BoldText className="not_found">No items found.</BoldText>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}
