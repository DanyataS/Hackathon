// script.js
function getRandomTemperature() {
                                                                                                    // Generate a random temperature between 20°C and 40°C (for example)
                                                                                                    const minTemperature = 20;
                                                                                                    const maxTemperature = 40;
                                                                                                    const temperature = Math.random() * (maxTemperature - minTemperature) + minTemperature;
                                                                                                
                                                                                                    // Update the temperature display
                                                                                                    document.getElementById('temp').textContent = `${temperature.toFixed(2)} °C`;
                                                                                                }
                                                                                                
                                                                                                // Update the temperature every 5 seconds (adjust as needed)
                                                                                                setInterval(getRandomTemperature, 5000);
                                                                                                
                                                                                                // Call getRandomTemperature once to set an initial value
                                                                                                getRandomTemperature();
                                                                                                