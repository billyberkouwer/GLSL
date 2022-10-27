#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform mat3 u_normalMatrix;
uniform mat4 u_modelMatrix;

void main() {
    vec2 coord = (gl_FragCoord.xy / u_resolution * 20.0);
    float time = u_time * 10.0;
    float b = 0.0 + sin((coord.y + 100.0 + time + sin(coord.x * 2.0)) + cos(coord.x + 100.0 + time)) / cos(coord.x-coord.y) * 0.5;
    float g = 0.0 + cos((coord.y + 100.0 + time) + sin(coord.y + 100.0 + time)) / cos(coord.x) * 0.2;

    // BLURRED VERSION
    // float g = 0.0 + cos((coord.y + 100.0 + time) + sin(coord.y + 100.0 + time)) / cos(coord.x) * 1.0;
    // float b = 0.0 + sin((coord.y + 100.0 + time) + cos(coord.x + 100.0 + time)) / cos(coord.x) * 1.0;

    // DIFFERENT VERSION
    // float g = 0.0 + cos((coord.y + 100.0 + time) + sin(coord.y + 100.0 + time)) / cos(coord.x) * 0.4;
    // float b = 0.0 + sin((coord.y + 100.0 + time) + cos(coord.x + 100.0 + time)) / cos(coord.x) * 100.0;

    vec3 color = vec3(
        b, 
        g, 
        g
        );
    gl_FragColor = vec4(color * u_normalMatrix, 1.0) ;
}