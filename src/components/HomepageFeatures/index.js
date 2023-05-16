import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '簡単に入れる！',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        めんどくさい認証や参加申請などいらない！
        勝手に参加できるし退出もできる！自由や！！
      </>
    ),
  },
  {
    title: '楽しく雑談できます！',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        昼はたくさん人が遊びに来ます！サバイバルしながらチャットをして楽しく話しましょう！
        <code>ルール</code>に違反しない範囲なら何でもOK。サバイバルより雑談してる人の方が多いかも？
      </>
      /*
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
      */
    ),
  },
  {
    title: 'サポートが速い！',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        最短30秒、最長3日に返信が返ってきます！
        困ったことがあれば、チャットで助けを求めるとほかのプレイヤーが助けてくれます！
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
