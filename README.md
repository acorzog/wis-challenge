# wis-challenge

# How to Run the Cypress Tests

### Clone this repository (or download the source).

```bash
git clone https://github.com/acorzog/e2e-challenge-calc.git
```

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org) installed.

```bash
npm install
```
Open Cypress Test Runner 
```bash
npx cypress open

```
Run Cypress Tests in CLI (Headless)
```bash
npx cypress run --browser chrome
```

# Test Artifacts

**Manual Test Scenarios**:  
  [View Detailed Test Scenarios (Google Sheet)](https://docs.google.com/spreadsheets/d/1k3rRGLq_4L8qlFXXAJ4cv30qcXvp9p1-0-TOLSkLwHw/edit?usp=sharing)

**Test Summary Report**:

### Test Coverage and Priority

| Area                   | Coverage     | Priority   |
|------------------------|--------------|------------|
| Page Load              | Covered   | High       |
| Responsiveness         | Covered   | High       |
| Filters                | Covered   | Medium–High|
| Offer Cards / CTAs     | Covered   | High       |
| Terms & Conditions     | Covered   | Medium     |
| Edge Cases             | Covered   | Medium–High|


### Found Issues

#### Issue 1

| **Field**          | **Details**                                                                                      |
|--------------------|------------------------------------------------------------------------------------------------|
| **Title**          | Bookmaker filter dropdown does not reflect selected pill filter, causing empty results          |
| **Severity**       | Medium                                                                                         |
| **Priority**       | High                                                                                           |
| **Environment**    | URL: `https://www.thepunterspage.com/free-bets/` <br>Browser: Chrome, Firefox <br>Device: Desktop & Mobile <br>OS: macOS / Windows |
| **Steps to Reproduce** | 1. Visit Free Bets page <br>2. Click a suggested filter pill ("Golf") <br>3. Click Bookie Filters dropdown <br>4. Select a Bookie from the dropdown <br>5. Observe "No offers found" despite valid pill <br>6. Bookie dropdown not aligned with pill filter |
| **Expected Result**  | Bookie filter dropdown should sync with active pill filter and only show relevant bookies|
| **Actual Result**    | Dropdown shows all bookies, causing mismatch and sometimes no results even when offers exist    |
| **Impact**           | Confusing UX, potential user frustration, false negative results                                |

---
#### Issue 2

| **Field**          | **Details**                                                                                      |
|--------------------|------------------------------------------------------------------------------------------------|
| **Title**          | Claim Bonus button sometimes requires multiple clicks to open new page                          |
| **Severity**       | Medium                                                                                         |
| **Priority**       | Medium                                                                                           |
| **Environment**    | URL: `https://www.thepunterspage.com/free-bets/` <br>Browser: Chrome, Firefox <br>Device: Desktop & Mobile <br>OS: macOS / Windows|
| **Steps to Reproduce** | 1. Load Free Bets page <br>2. Click on any "Claim Bonus" button on an offer card <br>3. Observe if the new tab opens immediately <br>4. If not, click the button again <br>5. Sometimes the new page opens only after second click |
| **Expected Result**  | Clicking the "Claim Bonus" button opens the linked page in a new tab immediately on first click |
| **Actual Result**    | Sometimes the button does not respond on first click, requiring multiple clicks to open new tab |
| **Impact**           | Poor user experience; possible loss of user trust; frustration especially on slower devices/networks |

---
#### Issue 3

| **Field**          | **Details**                                                                                      |
|--------------------|------------------------------------------------------------------------------------------------|
| **Title**          | Search bar does not expand properly, causing typed content to be partially hidden               |
| **Severity**       | Low                                                                                            |
| **Priority**       | Medium                                                                                         |
| **Environment**    | URL: `https://www.thepunterspage.com/free-bets/` <br>Browser: Chrome, Firefox <br>Device: Desktop <br>OS: macOS / Windows 10 |
| **Steps to Reproduce** | 1. Load Free Bets page <br>2. Click on the bookmaker search bar filter input <br>3. Start typing a bookmaker name <br>4. Observe that the input field does not expand or scroll properly <br>5. Typed content becomes partially or fully hidden, making it hard to verify input |
| **Expected Result**  | Search bar input should expand or scroll horizontally to show full typed content for easy visibility |
| **Actual Result**    | Input field remains fixed size, causing overflow and hidden typed characters, reducing usability |
| **Impact**           | Poor user experience; users may be unsure what they typed; frustration when searching |

---
#### Issue 4

| **Field**           | **Details**                                                                                     |
|---------------------|------------------------------------------------------------------------------------------------|
| **Title**           | “Go to Top” button on mobile does not scroll the page back to the top                           |
| **Severity**        | Medium                                                                                         |
| **Priority**        | Medium                                                                                         |
| **Environment**     | URL: `https://www.thepunterspage.com/free-bets/` <br>Device: Mobile (iOS and Android) <br>Browser: Safari, Chrome Mobile |
| **Steps to Reproduce** | 1. Open Free Bets page on a mobile device <br>2. Scroll down the page <br>3. Tap the “Go to Top” button <br>4. Observe that the page does not scroll back to the top as expected |
| **Expected Result**   | The page should smoothly scroll back to the very top when the “Go to Top” button is tapped     |
| **Actual Result**     | The page remains at the current scroll position; no visible scrolling occurs                    |
| **Impact**            | User cannot quickly return to top; negatively affects navigation and overall UX on mobile     |
