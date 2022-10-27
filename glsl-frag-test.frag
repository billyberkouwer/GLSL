#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main() {
    vec2 coord = (gl_FragCoord.xy / u_resolution);
    float time = u_time / 10.0;
    float b = sin((coord.y + time) / cos(coord.x + time));
    float g = cos((coord.y + time) / sin(coord.y + time)) / 1000.0 * coord.x * u_time / b;
    vec3 color = vec3(
        g, 
        g, 
        g
        );
    gl_FragColor = vec4(color, 1.0);
}