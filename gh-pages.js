import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'git@github.com:chARpMolecularBuilder/chARpMolecularBuilder.github.io.git',
  user: {
   name: 'Tobias Rau',
   email: 'tobias.rau@visus.uni-stuttgart.de'
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);