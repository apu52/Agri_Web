
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, Video, FileText, Download } from 'lucide-react';

// Sample resources data
const resourcesData = [
  {
    id: 1,
    title: 'Sustainable Farming Practices Guide',
    description: 'Learn about environmentally friendly farming techniques that can improve soil health and reduce environmental impact.',
    type: 'guide',
    tags: ['sustainable', 'soil health', 'beginner'],
    imageSrc: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    title: 'Crop Rotation Strategies',
    description: 'Maximize yield and minimize pests with effective crop rotation planning.',
    type: 'article',
    tags: ['crop management', 'planning', 'intermediate'],
    imageSrc: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 3,
    title: 'Introduction to Hydroponics',
    description: 'A comprehensive video guide on starting your hydroponic growing system.',
    type: 'video',
    tags: ['hydroponics', 'innovation', 'beginner'],
    imageSrc: 'https://images.unsplash.com/photo-1558658519-d3adb691e56e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 4,
    title: 'Pest Management Without Chemicals',
    description: 'Natural methods to keep pests at bay while maintaining a healthy ecosystem on your farm.',
    type: 'guide',
    tags: ['pest control', 'organic', 'intermediate'],
    imageSrc: 'https://images.unsplash.com/photo-1589928469706-3b9c81c52f12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 5,
    title: 'Weather Patterns and Farming',
    description: 'Understanding weather forecasts and how to use them in agricultural planning.',
    type: 'article',
    tags: ['weather', 'planning', 'advanced'],
    imageSrc: 'https://images.unsplash.com/photo-1516754982724-879e393bb556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 6,
    title: 'Irrigation Systems Comparison',
    description: 'Compare different irrigation methods to find the best one for your specific crops and conditions.',
    type: 'guide',
    tags: ['irrigation', 'equipment', 'intermediate'],
    imageSrc: 'https://images.unsplash.com/photo-1509390144018-e991f9f14bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  }
];

// Resource type icons
const getTypeIcon = (type) => {
  switch (type) {
    case 'guide':
      return <BookOpen className="h-5 w-5" />;
    case 'video':
      return <Video className="h-5 w-5" />;
    case 'article':
      return <FileText className="h-5 w-5" />;
    default:
      return <FileText className="h-5 w-5" />;
  }
};

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  
  // Filter resources based on search term and selected type
  const filteredResources = resourcesData.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-agri-green text-white py-16">
        <div className="agri-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Agricultural Resources</h1>
            <p className="text-xl mb-0">
              Browse our collection of guides, articles, and videos to enhance your farming knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-8 bg-gray-50">
        <div className="agri-container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search resources..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant={selectedType === 'all' ? 'default' : 'outline'} 
                className={selectedType === 'all' ? 'bg-agri-green' : 'border-agri-green text-agri-green'}
                onClick={() => setSelectedType('all')}
              >
                All
              </Button>
              <Button 
                variant={selectedType === 'guide' ? 'default' : 'outline'} 
                className={selectedType === 'guide' ? 'bg-agri-green' : 'border-agri-green text-agri-green'}
                onClick={() => setSelectedType('guide')}
              >
                Guides
              </Button>
              <Button 
                variant={selectedType === 'article' ? 'default' : 'outline'} 
                className={selectedType === 'article' ? 'bg-agri-green' : 'border-agri-green text-agri-green'}
                onClick={() => setSelectedType('article')}
              >
                Articles
              </Button>
              <Button 
                variant={selectedType === 'video' ? 'default' : 'outline'} 
                className={selectedType === 'video' ? 'bg-agri-green' : 'border-agri-green text-agri-green'}
                onClick={() => setSelectedType('video')}
              >
                Videos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="py-12">
        <div className="agri-container">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div 
                    className="h-48 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${resource.imageSrc})` }}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center text-agri-green mb-2">
                      {getTypeIcon(resource.type)}
                      <span className="ml-2 text-sm capitalize">{resource.type}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full bg-agri-green text-white hover:bg-agri-green-dark">
                      <Download className="h-4 w-4 mr-2" />
                      Access Resource
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No resources found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('all');
                }}
                className="bg-agri-green text-white hover:bg-agri-green-dark"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
