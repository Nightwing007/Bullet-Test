function hasCollided(lbullet,lwall)
{
    bulletRightedge = lbullet.x + lbullet.width/2;
    wallRight = lwall.x;
    if(bulletRightedge>=wallRight)
    {
        return true;
    }
    return false;
}