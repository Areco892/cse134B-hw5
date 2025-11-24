const projects_data = [
    { title: 'Classifier', src: '../img/project3-400.png', alt: 'A display of one of the datapoints, the digit 9, from the MNIST dataset.', description: "A simple kNN classifier that is able to classify MNIST digits with a 95% accuracy rate.", link: '/projects/classifier.html' },
    { title: 'Personal Portfolio', src: '../img/project1-400.png', alt: "The front page of Alexander's personal portfolio website.", description: 'This website showcases my work using semantic HTML and accessible design.', link: '/projects/portfolio.html' },
    { title: 'Math Game', src: '../img/project2-400.png', alt: 'The game screen of a math game website that quizzes students on highschool math topics, like linear equations.', description: "An educational website game that quizzes students on highschool math topics, like linear equations.", link: '/projects/game.html' }
]
if (localStorage.getItem('projects') == "[]") {
    localStorage.setItem('projects', JSON.stringify(projects_data));
}