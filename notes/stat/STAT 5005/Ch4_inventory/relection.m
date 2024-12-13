% Parameters
rng(2);
n = 50; % Number of steps
b = 5;   % Reflection boundary

% Initialize the random walk paths starting from (10, 5)
x0 = 10; % Starting x-coordinate
y0 = 5;  % Starting y-coordinate

path1_x = x0 + (0:n); % X-coordinates for path 1
path1_y = zeros(1, n+1) + y0; % Y-coordinates start at y0

path2_x = x0 + (0:n); % X-coordinates for path 2
path2_y = zeros(1, n+1) + y0; % Y-coordinates start at y0

% Generate the first simple random walk with reflection
for i = 2:n+1
    step = 2 * (rand > 0.5) - 1; % Random step: +1 or -1
    path1_y(i) = path1_y(i-1) + step;
    
    % Reflect the path at y = b
    if path1_y(i) > b
        path1_y(i) = 2*b - path1_y(i);
    elseif path1_y(i) < -b
        path1_y(i) = -2*b - path1_y(i);
    end
end
rng('shuffle');

% Generate the second path by reflecting path1 at y = b
path2_y = 2*b - path1_y;

% Plot the random walks
figure('Position',[100,100,720,360]);
hold on;
plot(path1_x(1:18), path1_y(1:18), 'b', 'LineWidth', 1.5);
plot(path2_x(1:18), path2_y(1:18), 'g', 'LineWidth', 1.5);
yline(b, 'r--', 'LineWidth', 1.5); % Plot the reflection boundary
xlabel('index');
xlim([0 30]);
xline(27);
ylabel('SRW');
title('Simple Random Walks with Reflection at y = b');
grid on;
legend('Path 1 ($\omega$)', 'Path 2 ($\omega^\prime$)', 'Reflection Boundary: $y=b$','Location','northwest','Interpreter', 'latex');
annotation('textbox', [0.35, 0.48, 0.05, 0.05], 'String', '$S_k$', 'Interpreter', 'latex', ...
           'FontSize', 12, 'BackgroundColor', 'none', 'EdgeColor', 'none');
annotation('textbox', [0.79, 0.48, 0.05, 0.05], 'String', '$S_n$', 'Interpreter', 'latex', ...
           'FontSize', 12, 'BackgroundColor', 'none', 'EdgeColor', 'none');
print('reflection','-dpng');