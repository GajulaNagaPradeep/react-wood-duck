import React from 'react';
import { storiesOf } from '@storybook/react';

const colors = [
  ['spruce', '#0d4f78', '$brand-01, $info01, $links-default'],
  ['aspen', '#09798e', '$brand-02'],
  ['fir', '#d8ecf0'],
  ['oak', '#601974', '$brand-03'],
  ['maple', '#bb3709', '$error-01'],
  ['hickory', '#e7740b', '$hickory'],
  ['elm', '#068347', '$success01'],
  ['white', '#ffffff'],
  ['ray', '#f5f5f5'],
  ['grouper', '#e8e8e8'],
  ['trout', '#d1d1d1', '$input-fields-border'],
  ['wahoo', '#5c5c5c'],
  ['shark', '#1a1a1a', '$text-default'],
];

const accessabilityColors = [
  ['spruce', 'white'],
  ['wahoo', 'white'],
  ['shark', 'white'],
  ['elm', 'white'],
  ['maple', 'white'],
  ['spruce', 'ray'],
  ['wahoo', 'ray'],
  ['shark', 'ray'],
  ['elm', 'ray'],
  ['maple', 'ray'],
  ['white', 'spruce'],
  ['white', 'wahoo'],
  ['white', 'shark'],
  ['white', 'elm'],
  ['white', 'maple'],
];

const colorsList = colors.map((color, i) => (
  <tr key={i}>
    <td className={'bg-' + color[0]} />
    <td>
      <code>${color[0]}</code>
    </td>
    <td>
      <code>
        .c-
        {color[0]}
      </code>
    </td>
    <td>
      <code>
        .bg-
        {color[0]}
      </code>
    </td>
    <td>
      <code>{color[1]}</code>
    </td>
  </tr>
));

const accessabilityColorsList = accessabilityColors.map((color, i) => (
  <tr key={i}>
    <td className={'c-' + color[0] + ' bg-' + color[1]}>${color[0]}</td>
    <td className={'c-' + color[0] + ' bg-' + color[1]}>${color[1]}</td>
  </tr>
));

const Colors = () => (
  <main className="styleguide-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="styleguide-inner">
            <h1 id="Colors" className="styleguide">
              Colors
            </h1>

            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <td>Color</td>
                    <td>Name</td>
                    <td>Color className</td>
                    <td>Background className</td>
                    <td>Value</td>
                  </tr>
                </thead>
                <tbody />
                <tbody>
                  {colorsList}
                  <tr>
                    <td className="bg-locust" />
                    <td>
                      <code>$spruce -&gt; $aspen</code>
                    </td>
                    <td>
                      <code>.c-locust</code>
                    </td>
                    <td>
                      <code>.bg-locust</code>
                    </td>
                    <td>
                      <code>#0d4f78..#09798e</code>
                    </td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Accessible Colors</h2>
            <p className="styleguide">
              Here is an uncomprehensive list of accessible color combinations:
            </p>
            <div>
              <table>
                <thead>
                  <tr>
                    <td>Foreground Color</td>
                    <td>Background Color</td>
                  </tr>
                </thead>
                <tbody>{accessabilityColorsList}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

storiesOf('Styles', module).add('Colors', Colors);
