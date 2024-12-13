% Define the vertices of the square
square_vertices = [0 0; 1 0; 1 1; 0 1];

% Define the vertices of the triangle (region x + y <= 1)
triangle_vertices = [0 0; 1 0; 0 1];

% Plot the square's edges first
figure;
subplot(1,2,1);
hold on;
plot([square_vertices(:,1); square_vertices(1,1)], ...
     [square_vertices(:,2); square_vertices(1,2)], 'k-', 'LineWidth', 1);

% Plot the triangle inside the square
fill(triangle_vertices(:,1), triangle_vertices(:,2), 'red', 'FaceAlpha', 0.5, 'EdgeColor', 'black', 'LineWidth', 1);

% Set the axis properties
axis equal; % Use equal scaling for both axes
xlabel('X');
ylabel('Y');
ylim([0 1]);
title('Region x + y \leq 1 within the Square');


subplot(1,2,2);
% Define the vertices of the tetrahedron
tetrahedron_vertices = [0 0 0; 1 0 0; 0 1 0; 0 0 1];

% Define the faces of the tetrahedron using the vertices
tetrahedron_faces = [1 2 3;  % Base triangle on the x-y plane
                     1 2 4;  % Side triangle on the x-z plane
                     1 3 4;  % Side triangle on the y-z plane
                     2 3 4]; % Top triangle

% Define the vertices of the cube
cube_vertices = [0 0 0; 1 0 0; 1 1 0; 0 1 0; ...
                 0 0 1; 1 0 1; 1 1 1; 0 1 1];

% Define the edges of the cube
cube_edges = [1 2; 2 3; 3 4; 4 1;  % Bottom face edges
              5 6; 6 7; 7 8; 8 5;  % Top face edges
              1 5; 2 6; 3 7; 4 8]; % Vertical edges

% Plot the edges of the cube
for i = 1:size(cube_edges, 1)
    plot3(cube_vertices(cube_edges(i, :), 1), ...
          cube_vertices(cube_edges(i, :), 2), ...
          cube_vertices(cube_edges(i, :), 3), 'k-', 'LineWidth', 1);
end

% Plot the tetrahedron inside the cube
patch('Vertices', tetrahedron_vertices, 'Faces', tetrahedron_faces, ...
      'FaceColor', 'red', 'FaceAlpha', 0.5, 'EdgeColor', 'black', 'LineWidth', 1);

% Set the view and axis properties
view(3); % Set the view to 3D
axis equal; % Use equal scaling for all axes
xlabel('X');
ylabel('Y');
zlabel('Z');
title('Region x + y + z \leq 1 within the Cube');
hold off;
