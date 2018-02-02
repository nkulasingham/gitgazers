import React from 'react';

const Repository = ({
  styles,
  isFork,
  login,
  name,
  description,
  parent,
  forkCount,
  stargazers,
}) => (
  <a href={`https://github.com/${login}/${name}`}>
    <div className={`box ${styles.githubLink}`}>
      <div className="columns">
        <div className="column is-9">
          <strong>{name}</strong>
          <br />
          <span> {description} </span>
          <br />
          {isFork && (
            <span className={styles.forkSourceText}>
              Forked from &nbsp;
              <a href={parent.url}>{parent.url}</a>
            </span>
          )}
        </div>
        <div className={`column is-3 ${styles.iconContainer}`}>
          <span className={styles.icon}>
            {forkCount}
            <i className="fa fa-code-fork" />
          </span>
          <span className={styles.icon}>
            {stargazers.totalCount}
            <i className="fa fa-star" />
          </span>
        </div>
      </div>
    </div>
  </a>
);

export default Repository;