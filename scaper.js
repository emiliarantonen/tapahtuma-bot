import puppeteer from "puppeteer"

export const getEvents = async () => {
    // Start a Puppeteer session with:
    const browser = await puppeteer.launch({
      headless: true,
    });
  
    // Open a new page
    const page = await browser.newPage();
  
    // On this new page:
    // - open the "https://tietoteekkarikilta.fi/events" website
    await page.goto("https://tietoteekkarikilta.fi/events", {
      waitUntil: "domcontentloaded",
    });

    // Get page data
    const events = await page.evaluate(() => {
        // Fetch the script
        const scriptElement = document.querySelector('#__NEXT_DATA__');
        
            const data = JSON.parse(scriptElement.textContent);
            const result = []

            // Access the events array
            const eventsArray = data.props.pageProps.events;

            eventsArray.forEach(event => {
                const eventName = event.name_finnish;
                const date = new Date(event.start);
                // Using `toLocaleString` for a more readable format
                const startDate = date.toLocaleString('en-US', {
                    weekday: 'short', 
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                });        
                const location = event.location_finnish;
                // Add event details to the result
                result.push({ eventName, startDate, location });
              });
            return result; 

    });
    
    console.log(events); // Check the fetched data
    // Close the browser
    await browser.close();

    return events;
    
  };
  
  // Start the scraping
  getEvents();

