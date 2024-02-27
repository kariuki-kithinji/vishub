document.addEventListener('DOMContentLoaded', function() {
    const svg = d3.select('body').append('svg')
        .attr('width', 500)
        .attr('height', 500);
    
    const face = svg.append('circle')
        .attr('r', 200)
        .attr('cx', 250)
        .attr('cy', 250)
        .attr('fill', 'yellow')
        .attr('stroke', 'black')
        .attr('stroke-width', 4);

    const leftEye = svg.append('circle')
        .attr('r', 20)
        .attr('cx', 200)
        .attr('cy', 200)
        .attr('fill', 'black');

    const rightEye = svg.append('circle')
        .attr('r', 20)
        .attr('cx', 300)
        .attr('cy', 200)
        .attr('fill', 'black');

    const mouth = svg.append('path')
        .attr('d', d3.arc()
            .innerRadius(70)
            .outerRadius(80)
            .startAngle(Math.PI / 2)
            .endAngle((Math.PI * 3) / 2))
        .attr('transform', 'translate(250, 250)')
        .attr('fill', 'black');
});
