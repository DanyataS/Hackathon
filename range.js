// script.js

function getVehicleRange() {
                                                                                                    // Simulate vehicle range data between 50 miles and 300 miles
                                                                                                    const minRange = 50;
                                                                                                    const maxRange = 300;
                                                                                                    const range = Math.random() * (maxRange - minRange) + minRange;
                                                                                                
                                                                                                    // Update the range display
                                                                                                    document.getElementById('range').textContent = `${range.toFixed(2)} miles`;
                                                                                                }
                                                                                                
                                                                                                // Update the range every 5 seconds (adjust as needed)
                                                                                                setInterval(getVehicleRange, 5000);
                                                                                                
                                                                                                // Call getVehicleRange once to set an initial value
                                                                                                getVehicleRange();
                                                                                                