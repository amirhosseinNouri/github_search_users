import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";

const Followers = () => {
  const { followers, searchGithubUsers } = React.useContext(GithubContext);

  const handleClick = (username) => {
    searchGithubUsers(username);
  };

  return (
    <Wrapper>
      <div className="followers">
        {followers.map((item, index) => {
          const { avatar_url: img, html_url, login } = item;
          return (
            <article key={index}>
              <img
                src={img}
                alt={login}
                onClick={() => handleClick(item.login)}
              />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  max-width: 90vw;
  background-color: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  position: relative;

  &::before {
    content: "followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background-color: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    padding: 0.5rem 1rem 0 1rem;
    font-size: 1rem;
  }

  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    grid-gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }

  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    align-items: center;

    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
      cursor: pointer;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
  }
`;
export default Followers;
