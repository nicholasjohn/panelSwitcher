# Panel Switcher
A jQuery plugin to emulate basic dropdown-selecting tab features across multiple element types.

## Usage

Any form with can have the `.panelSwitcher()` method called on it.
The method call and full list of settings can be seen [below](#panelswitcher).


### Implementation
---

There are a few starting requirements for your HTML structure:

* A 'control' form with the class `.panelSwitcher__control`
* A `<select>` element inside the control
* A panel container with a class of `.panelSwitcher__panels`
* Each panel (any element) should be given a class of `.panelSwitcher__panel`
* These panels should have `data-panel` attributes with unique identifiers
* Each panel should have a matching `<option>` within `.panelSwitcher__control`
* Each `<option>` needs a value matching the relevant panel's `data-panel` attribute



### $.panelSwitcher()
---

#### Options
> Coming soon...


#### Methods
> Coming soon...


## Update Log
### Essential
- [ ] Write basic README.md


## Project Files
The below table summarises the contents of each file throughout the structure of TouchCarousel:

<table>
  <tr>
    <th colspan=2>/CSS</th>
  </tr>
  <tr><td><em>styles.css</em></td><td>
      Generic styling
  </td>  </tr>


  <tr>
    <th colspan=2>/JS</th>
  </tr>
  <tr><td><em>panelSwitcher.js</em></td><td>
      This is the main jQuery file which runs switcher. It should be
      included as a script tag <strong>after</strong> your jQuery include.
  </td> </tr>
  <tr><td><em>panelSwitcher.min.js</em></td><td>
    A minified version for use on live sites.
  </td></tr>

  <tr>
    <th colspan=2>HTML
      <br>
      These are a compliled example HTML files.
    </th>
  </tr>

</table>


## Composite DOM Structures

### Initial
The source-file HTML DOM structure of the carousel should be as follows:

```
+-- `<form>` with `<select>` -------------+
+-- .panelSwitcher__panels ---------------+
|  +----- .panelSwitcher__panel(s) ----+  |
+-----------------------------------------+
```