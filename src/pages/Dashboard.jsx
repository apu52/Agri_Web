
import { useState } from 'react';
import { 
  Cloud, 
  Droplet, 
  Thermometer, 
  Wind, 
  Sprout, 
  Calendar, 
  BarChart3, 
  Tractor,
  Plus,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

// Mock data for dashboard
const weatherData = {
  current: {
    temp: 24,
    humidity: 65,
    windSpeed: 8,
    condition: 'Partly Cloudy',
    precipitation: 10
  },
  forecast: [
    { day: 'Mon', temp: 25, condition: 'Sunny' },
    { day: 'Tue', temp: 23, condition: 'Partly Cloudy' },
    { day: 'Wed', temp: 22, condition: 'Cloudy' },
    { day: 'Thu', temp: 20, condition: 'Rainy' },
    { day: 'Fri', temp: 21, condition: 'Partly Cloudy' },
  ]
};

const cropData = [
  { id: 1, name: 'Corn', area: '10 acres', plantDate: '2023-04-15', harvestDate: '2023-08-20', progress: 65 },
  { id: 2, name: 'Wheat', area: '15 acres', plantDate: '2023-03-10', harvestDate: '2023-07-15', progress: 80 },
  { id: 3, name: 'Soybeans', area: '8 acres', plantDate: '2023-05-05', harvestDate: '2023-09-25', progress: 40 }
];

const recentActivities = [
  { id: 1, date: '2023-06-10', activity: 'Applied fertilizer to corn field', type: 'Task' },
  { id: 2, date: '2023-06-09', activity: 'Irrigation system maintenance', type: 'Maintenance' },
  { id: 3, date: '2023-06-07', activity: 'Harvested early wheat crops', type: 'Harvest' },
  { id: 4, date: '2023-06-05', activity: 'Checked soil moisture levels', type: 'Monitoring' }
];

const Dashboard = () => {
  const [crops, setCrops] = useState(cropData);
  const [showAddCrop, setShowAddCrop] = useState(false);
  const [newCrop, setNewCrop] = useState({
    name: '',
    area: '',
    plantDate: '',
    harvestDate: '',
    progress: 0
  });

  const handleAddCrop = () => {
    if (newCrop.name && newCrop.area && newCrop.plantDate && newCrop.harvestDate) {
      const crop = {
        id: Date.now(),
        ...newCrop,
        progress: 0
      };
      setCrops([...crops, crop]);
      setNewCrop({
        name: '',
        area: '',
        plantDate: '',
        harvestDate: '',
        progress: 0
      });
      setShowAddCrop(false);
    }
  };

  const handleDeleteCrop = (id) => {
    setCrops(crops.filter(crop => crop.id !== id));
  };

  return (
    <div className="p-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Weather Card */}
        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center">
              <Cloud className="mr-2 h-5 w-5 text-agri-blue" />
              Weather Forecast
            </CardTitle>
            <CardDescription>Current conditions and 5-day forecast</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4 border-b mb-4">
              <div className="text-4xl font-bold mb-1">{weatherData.current.temp}°C</div>
              <div className="text-gray-500">{weatherData.current.condition}</div>
              <div className="grid grid-cols-3 mt-4">
                <div>
                  <Droplet className="h-5 w-5 mx-auto text-agri-blue" />
                  <div className="text-sm mt-1">{weatherData.current.humidity}%</div>
                  <div className="text-xs text-gray-500">Humidity</div>
                </div>
                <div>
                  <Wind className="h-5 w-5 mx-auto text-agri-blue" />
                  <div className="text-sm mt-1">{weatherData.current.windSpeed} km/h</div>
                  <div className="text-xs text-gray-500">Wind</div>
                </div>
                <div>
                  <Thermometer className="h-5 w-5 mx-auto text-agri-blue" />
                  <div className="text-sm mt-1">{weatherData.current.precipitation}%</div>
                  <div className="text-xs text-gray-500">Precip</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-2 text-center">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium">{day.day}</div>
                  <Cloud className="h-5 w-5 mx-auto my-1" />
                  <div>{day.temp}°C</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Crop Status Card */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center">
                <Sprout className="mr-2 h-5 w-5 text-agri-green" />
                Crop Status
              </CardTitle>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-agri-green"
                onClick={() => setShowAddCrop(!showAddCrop)}
              >
                {showAddCrop ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                {showAddCrop ? 'Cancel' : 'Add Crop'}
              </Button>
            </div>
            <CardDescription>Monitor your current crops and progress</CardDescription>
          </CardHeader>
          <CardContent>
            {showAddCrop && (
              <div className="mb-6 p-4 border rounded-md bg-gray-50 animate-fade-in">
                <h3 className="text-sm font-medium mb-3">Add New Crop</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm mb-1">Crop Name</label>
                    <input
                      type="text"
                      className="agri-input w-full"
                      value={newCrop.name}
                      onChange={(e) => setNewCrop({...newCrop, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Area</label>
                    <input
                      type="text"
                      className="agri-input w-full"
                      placeholder="e.g. 5 acres"
                      value={newCrop.area}
                      onChange={(e) => setNewCrop({...newCrop, area: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Plant Date</label>
                    <input
                      type="date"
                      className="agri-input w-full"
                      value={newCrop.plantDate}
                      onChange={(e) => setNewCrop({...newCrop, plantDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Expected Harvest</label>
                    <input
                      type="date"
                      className="agri-input w-full"
                      value={newCrop.harvestDate}
                      onChange={(e) => setNewCrop({...newCrop, harvestDate: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button 
                    className="bg-agri-green hover:bg-agri-green-dark"
                    onClick={handleAddCrop}
                  >
                    Add Crop
                  </Button>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              {crops.map((crop) => (
                <div key={crop.id} className="p-4 border rounded-md hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{crop.name}</h3>
                    <button 
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => handleDeleteCrop(crop.id)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-3">
                    <div>
                      <span className="block text-gray-500">Area</span>
                      <span>{crop.area}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500">Planted</span>
                      <span>{new Date(crop.plantDate).toLocaleDateString()}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500">Harvest</span>
                      <span>{new Date(crop.harvestDate).toLocaleDateString()}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500">Progress</span>
                      <span>{crop.progress}%</span>
                    </div>
                  </div>
                  <Progress value={crop.progress} className="h-2" />
                </div>
              ))}
              
              {crops.length === 0 && !showAddCrop && (
                <div className="text-center py-8 text-gray-500">
                  <Sprout className="h-10 w-10 mx-auto mb-3 text-gray-300" />
                  <p>No crops added yet. Click "Add Crop" to get started.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-agri-brown" />
              Recent Activities
            </CardTitle>
            <CardDescription>Your latest farming activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="bg-gray-100 rounded-full p-2 mr-3">
                    <Calendar className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.activity}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-gray-500">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                        {activity.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Activities</Button>
          </CardFooter>
        </Card>
        
        {/* Quick Actions Card */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Tractor className="mr-2 h-5 w-5 text-agri-green" />
              Quick Actions
            </CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
                <Sprout className="h-5 w-5 mb-2" />
                <span>Record Planting</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
                <Droplet className="h-5 w-5 mb-2" />
                <span>Log Irrigation</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
                <BarChart3 className="h-5 w-5 mb-2" />
                <span>View Reports</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-24 items-center justify-center">
                <Calendar className="h-5 w-5 mb-2" />
                <span>Schedule Task</span>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Statistics Card */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-agri-blue" />
              Farm Statistics
            </CardTitle>
            <CardDescription>Overview of your farm performance</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="yield">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="yield" className="flex-1">Yield</TabsTrigger>
                <TabsTrigger value="costs" className="flex-1">Costs</TabsTrigger>
                <TabsTrigger value="resources" className="flex-1">Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="yield" className="pt-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Corn</span>
                      <span className="text-sm font-medium">8.2 tons/acre</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Wheat</span>
                      <span className="text-sm font-medium">3.5 tons/acre</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Soybeans</span>
                      <span className="text-sm font-medium">2.8 tons/acre</span>
                    </div>
                    <Progress value={53} className="h-2" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="costs" className="pt-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Seeds</span>
                      <span className="text-sm font-medium">$2,450</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Fertilizer</span>
                      <span className="text-sm font-medium">$1,850</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Equipment</span>
                      <span className="text-sm font-medium">$3,200</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="resources" className="pt-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Water Usage</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Fuel Consumption</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Labor Hours</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
