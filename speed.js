// script.js

function getVehicleSpeed() {
                                                                                                    // Simulate vehicle speed data between 0 mph and 100 mph
                                                                                                    const minSpeed = 0;
                                                                                                    const maxSpeed = 100;
                                                                                                    const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
                                                                                                
                                                                                                    // Update the speed display
                                                                                                    document.getElementById('speed').textContent = `${speed.toFixed(2)} mph`;
                                                                                                }
                                                                                                
                                                                                                // Update the speed every 5 seconds (adjust as needed)
                                                                                                setInterval(getVehicleSpeed, 5000);
                                                                                                
                                                                                                // Call getVehicleSpeed once to set an initial value
                                                                                                getVehicleSpeed();
                                                                                                